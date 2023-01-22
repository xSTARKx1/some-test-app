import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import userRolesReducer from '../features/users/userRolesSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    userRoles: userRolesReducer,
  },
});
