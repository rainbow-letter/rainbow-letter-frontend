import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: { isOpen: false, type: null, current: false },
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.current = true;
      state.type = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.current = false;
      state.type = null;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice;
