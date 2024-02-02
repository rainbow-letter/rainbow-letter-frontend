import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../api';

export const fetchUserInfo = createAsyncThunk(
  'user/fetchUserInfo',
  async () => {
    const response = await api.get('/api/members/info');
    return response;
  }
);

export const updatePhoneNumber = createAsyncThunk(
  'user/updatePhoneNumber',
  async (phoneNumber) => {
    const response = await api.put('/api/members/phoneNumber', { phoneNumber });
    return response;
  }
);

export const deletePhoneNumber = createAsyncThunk(
  'user/deletePhoneNumber',
  async () => {
    const response = await api.delete(`/api/members/phoneNumber`);
    return response;
  }
);
