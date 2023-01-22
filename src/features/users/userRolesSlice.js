import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUserRoles } from './usersAPI';

const initialState = {
  status: 'idle',
  userRoles: [],
};

export const getRolesFromServer = createAsyncThunk(
  'users/fetchRoles',
  async () => {
    const response = await fetchUserRoles();
    return response.data;
  }
);

export const userRolesSlice = createSlice({
  name: 'userRoles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRolesFromServer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getRolesFromServer.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userRoles = action.payload.positions;
      });
  },
});

export const getUserRoles = (state) => state.userRoles.userRoles;

export default userRolesSlice.reducer;
