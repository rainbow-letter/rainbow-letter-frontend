import { createAsyncThunk } from '@reduxjs/toolkit';

import api from 'api';

export const fetchUserInfo = createAsyncThunk(
  'user/fetchUserInfo',
  async (): Promise<any> => {
    const response = await api.get('/api/users/info');
    return response.data;
  }
);

export const updatePhoneNumber = createAsyncThunk(
  'user/updatePhoneNumber',
  async (phoneNumber: string): Promise<any> => {
    const response = await api.put('/api/users/phone-number', { phoneNumber });
    return response.data;
  }
);

export const deletePhoneNumber = createAsyncThunk(
  'user/deletePhoneNumber',
  async (): Promise<any> => {
    const response = await api.delete(`/api/users/phone-number`);
    return response.data;
  }
);
