import axios from 'axios';

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency';

const baseConfig = {
  headers: {
    Accept: 'multipart/form-data',
    'Content-Type': 'multipart/form-data',
  },
};

export function fetchUsers(page) {
  return axios.get(`/api/v1/users?page=${page}&count=6`);
}

export function getToken() {
  return axios.get(`/api/v1/token`);
}

export function fetchUserRoles() {
  return axios.get(`/api/v1/positions`);
}

export const signUp = async (data, token) => {
  const newUser = await axios.post('/api/v1/users', data, {
    headers: {
      ...baseConfig.headers,
      Token: token,
    },
  });

  return newUser.data;
};
