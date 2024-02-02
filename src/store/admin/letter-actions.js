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

// type Request = {
//   replyId: Number,
//   letterId: Number,
// }
export const sendReply = createAsyncThunk(
  'adminLetter/sendReply',
  async (requests) => {
    const requestsArray = Array.isArray(requests) ? requests : [requests];

    await Promise.all(
      requestsArray.map((request) =>
        api.post(`/api/replies/admin/submit/${request.replyId}`, {
          letterId: request.letterId,
        })
      )
    );
  }
);
