/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSaving: false,
  isSuccess: false,
};

const letterSlice = createSlice({
  name: 'letter',
  initialState,
  reducers: {
    setIsSaving(state, action) {
      state.isSaving = action.payload;
    },
    setIsSuccess(state) {
      state.isSaving = false;
      state.isSuccess = true;
    },
    setisFailed(state) {
      state.isSaving = false;
      state.isSuccess = false;
    },
  },
});

export const letterActions = letterSlice.actions;
export default letterSlice;
