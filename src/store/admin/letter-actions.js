/* eslint-disable consistent-return */
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

    const response = await api.get(`/api/letters/admin/list?${queryParams}`);
    return response.data;
  }
);

export const editReply = createAsyncThunk(
  'adminLetter/editReply',
  async ({ replyId, editedReply }, { getState }) => {
    const response = await api.put(
      `/api/replies/admin/${replyId}`,
      editedReply
    );

    const inspection = getState().adminLetters?.letters?.find(
      (letter) => letter.reply.id === replyId
    )?.reply.inspection;

    return { response, inspection };
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
  async (requests, { rejectWithValue }) => {
    const requestsArray = Array.isArray(requests) ? requests : [requests];

    const results = await Promise.allSettled(
      requestsArray.map((request) =>
        api.post(`/api/replies/admin/submit/${request.replyId}`, {
          letterId: request.letterId,
        })
      )
    );

    const failed = results.filter((result) => result.status === 'rejected');
    if (failed.length > 0) {
      // NOTE: 실패한 요청의 수를 rejectWithValue와 함께 반환
      return rejectWithValue(failed.length);
    }
  }
);
