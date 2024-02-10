import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../api';

export const fetchUserInfo = createAsyncThunk(
  'user/fetchUserInfo',
  async (): Promise<any> => {
    const response = await api.get('/api/members/info');
    return response;
  }
);

export const updatePhoneNumber = createAsyncThunk(
  'user/updatePhoneNumber',
  async (phoneNumber: string): Promise<any> => {
    const response = await api.put('/api/members/phoneNumber', { phoneNumber });
    return response;
  }
);

export const deletePhoneNumber = createAsyncThunk(
  'user/deletePhoneNumber',
  async (): Promise<any> => {
    const response = await api.delete(`/api/members/phoneNumber`);
    return response;
  }
);
