import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './usersAPI';

const initialState = {
  users: [],
  status: 'idle',
  currentPage: 1,
  isShowButton: true,
};

export const getUsersAsync = createAsyncThunk(
  'users/fetchUsers',
  async (page = 1) => {
    const response = await fetchUsers(page);
    return response.data;
  }
);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.users = [...state.users, ...action.payload.users];
        state.currentPage = action.payload.page;
        state.isShowButton = action.payload.page !== action.payload.total_pages;
      });
  },
});

export const selectUsers = (state) => state.users.users;
export const showLoadMoreButton = (state) => state.users.isShowButton;
export const isShowLoader = (state) => state.users.status;
const getCurrentPage = (state) => state.users.currentPage;

export const loadMoreUser = () => (dispatch, getState) => {
  const currentPage = getCurrentPage(getState());
  dispatch(getUsersAsync(currentPage + 1));
};

export default usersSlice.reducer;