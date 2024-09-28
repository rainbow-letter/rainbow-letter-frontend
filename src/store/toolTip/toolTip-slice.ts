import { createSlice } from '@reduxjs/toolkit';

const toolTipSlice = createSlice({
  name: 'toolTip',
  initialState: { isOpen: false },
  reducers: {
    openToolTip(state) {
      state.isOpen = true;
    },
    closeToolTip(state) {
      state.isOpen = false;
    },
  },
});

export const toolTipActions = toolTipSlice.actions;
export default toolTipSlice;
