/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: { isOpen: false, type: null, test: null },
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.type = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.type = null;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice;
