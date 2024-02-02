/* eslint-disable import/no-cycle */
import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';

export const fetchLetters = createAsyncThunk(
  'adminLetter/fetchLetters',
  async (_, { getState }) => {
    const { filterOption } = getState().adminLetterUi;

    const queryParams = new URLSearchParams({
      type: filterOption.type,
      startDate: filterOption.startDate,
      endDate: filterOption.endDate,
      page: filterOption.page,
      size: filterOption.size,
    });

    const response = await api.get(`/api/admin/letters?${queryParams}`);
    return response;
  }
);

export const editReply = createAsyncThunk(
  'adminLetter/editReply',
  async ({ replyId, editedReply }) => {
    const response = await api.put(
      `/api/replies/admin/${replyId}`,
      editedReply
    );
    return response;
  }
);

export const inspectReply = createAsyncThunk(
  'adminLetter/inspectReply',
  async (replyId) => {
    const response = await api.post(`/api/replies/admin/inspect/${replyId}`);
    return response;
  }
);

export const sendReply = createAsyncThunk(
  'adminLetter/sendReply',
  async ({ replyId, letterId }) => {
    const response = await api.post(
      `/api/replies/admin/submit/${replyId}`,
      letterId
    );
    return response;
  }
);
