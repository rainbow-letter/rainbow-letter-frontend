/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit';

import { fetchLetters } from './letter-actions';
import { formatDateToYMD, getPastDate } from '../../utils/date';

// type FilterOption = {
//   type: 'ALL' | 'WAIT' | 'COMPLETE';
//   startDate: string;
//   endDate: string;
//   page: number;
//   size: number;
// };

// type LetterUi = {
//   filterOption: FilterOption
//   totalPages: number;
//   status: 'idle' | 'loading' | 'success' | 'failed';
//   error: string | null;
// };

const TODAY = formatDateToYMD();
const DAYS_AGO = 2;
const DEFAULT_LETTERS_PER_PAGE = 25;

const initialState = {
  filterOption: {
    type: 'ALL',
    startDate: getPastDate(DAYS_AGO),
    endDate: TODAY,
    page: 0,
    size: DEFAULT_LETTERS_PER_PAGE,
  },
  totalPages: 1,
  status: 'idle',
  error: null,
};

const adminLetterUiSlice = createSlice({
  name: 'adminLetterUi',
  initialState,
  reducers: {
    setFilterOption(state, action) {
      const isPageOnly =
        Object.keys(action.payload).length === 1 && 'page' in action.payload;

      if (isPageOnly) {
        state.filterOption.page = action.payload.page;
      } else {
        state.filterOption = {
          ...state.filterOption,
          ...action.payload,
          page: 0,
        };
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLetters.fulfilled, (state, action) => {
      state.status = 'success';
      state.totalPages = action.payload.totalPages;
    });
  },
});

export const letterUiActions = adminLetterUiSlice.actions;
export default adminLetterUiSlice;
