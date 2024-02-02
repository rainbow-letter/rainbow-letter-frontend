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
      // 여기서 실패 처리를 할 수 있습니다. 예를 들어, 실패한 요청에 대한 정보를 반환할 수 있습니다.
      // 이 예시에서는 단순히 실패한 요청의 수를 rejectWithValue와 함께 반환합니다.
      return rejectWithValue(failed.length);
    }
  }
);
