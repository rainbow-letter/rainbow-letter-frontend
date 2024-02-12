/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const petSlice = createSlice({
  name: 'pet',
  initialState: {},
  reducers: {},
});

export const petActions = petSlice.actions;
export default petSlice;
