/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import {
  fetchUserInfo,
  updatePhoneNumber,
  deletePhoneNumber,
} from 'store/user-actions';

const initialState = {
  user: { id: null, email: null, phoneNumber: null, role: null },
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.status = 'success';
        state.user = action.payload;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updatePhoneNumber.fulfilled, (state, action) => {
        state.user.phoneNumber = action.payload.phoneNumber;
      })
      .addCase(deletePhoneNumber.fulfilled, (state) => {
        state.status = 'success';
        state.user.phoneNumber = null;
      });
  },
});

export const userActions = userSlice.actions;
export default userSlice;
