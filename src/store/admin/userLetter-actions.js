/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';

export const fetchUserLetters = createAsyncThunk(
  'adminUserLetter/fetchLetters',
  async (_, { getState }) => {
    const { filterOption } = getState().adminUserLetters;

    const queryParams = new URLSearchParams({
      type: filterOption.type,
      startDate: filterOption.startDate,
      endDate: filterOption.endDate,
      page: filterOption.page,
      size: filterOption.size,
      email: filterOption.email,
    });

    const response = await api.get(`/api/letters/admin/list?${queryParams}`);
    return response.data;
  }
);
