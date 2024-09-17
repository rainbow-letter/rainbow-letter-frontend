import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api';

export const fetchLetters = createAsyncThunk(
  'adminLetter/fetchLetters',
  async (_, { getState }) => {
    const { filterOption } = getState().adminLetterUi;

    const queryParams = new URLSearchParams({
      start: filterOption.startDate,
      end: filterOption.endDate,

      email: filterOption.email,

      page: filterOption.page,
      size: filterOption.size,
    });

    if (filterOption.inspect !== 'null') {
      queryParams.append('inspect', filterOption.inspect);
    }

    if (filterOption.status !== 'null') {
      queryParams.append('status', filterOption.status);
    }

    const response = await api.get(`/api/admins/letters/list?${queryParams}`);
    return response.data;
  }
);

export const fetchLetter = createAsyncThunk(
  'adminLetter/fetchLetter',
  async (userId, petId, letterId) => {
    const queryParams = new URLSearchParams({
      user: userId,
      pet: petId,
    });

    const response = await api.get(
      `/api/admins/letters/${letterId}?${queryParams}`
    );
    return response;
  }
);

export const editReply = createAsyncThunk(
  'adminLetter/editReply',
  async ({ replyId, editedReply }, { getState }) => {
    const response = await api.put(
      `/api/admins/replies/${replyId}`,
      editedReply
    );

    const inspection = getState().adminLetters?.letters?.find(
      (letter) => letter.reply && letter.reply.id === replyId
    )?.reply?.inspection;

    return { response, inspection };
  }
);

export const inspectReply = createAsyncThunk(
  'adminLetter/inspectReply',
  async (replyId) => {
    const response = await api.post(`/api/admins/replies/inspect/${replyId}`);
    return response;
  }
);

export const regenerateReply = createAsyncThunk(
  'adminLetter/regenerateReply',
  async (letterId) => {
    const response = await api.post(`/api/admins/replies/generate/${letterId}`);
    return response;
  }
);

export const sendReply = createAsyncThunk(
  'adminLetter/sendReply',
  async (requests, { rejectWithValue }) => {
    const requestsArray = Array.isArray(requests) ? requests : [requests];

    const results = await Promise.allSettled(
      requestsArray.map((request) =>
        api.post(`/api/admins/replies/submit/${request.id}`)
      )
    );

    const failed = results.filter((result) => result.status === 'rejected');
    if (failed.length > 0) {
      // NOTE: 실패한 요청의 수를 rejectWithValue와 함께 반환
      return rejectWithValue(failed.length);
    }
  }
);
