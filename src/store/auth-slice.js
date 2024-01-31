/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'user',
  initialState: { token: null, role: null },
  reducers: {
    getToken(state, action) {
      state.token = action.payload;
    },
    setUserRole(state, action) {
      state.role = action.payload;
    },
    removeToken(state) {
      state.token = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
