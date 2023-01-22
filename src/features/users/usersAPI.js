import axios from 'axios';

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency';

export function fetchUsers(page) {
  return axios.get(`/api/v1/users?page=${page}&count=6`);
}

export function fetchUserRoles(page) {
  return axios.get(`/api/v1/positions`);
}
