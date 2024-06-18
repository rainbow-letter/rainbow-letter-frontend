/* eslint-disable */
import apiRequest from 'api';
import { ApiResponse } from 'types/Api';

const RESOURCE = '/api/images';

export const getImage = async (key: string): ApiResponse<string> => {
  const response = await apiRequest.get(`${RESOURCE}/resources/${key}`);

  return response;
};

export const updateImageAndGetId = async (data: any): Promise<any> => {
  const response = await apiRequest.post(`${RESOURCE}/upload?type=PET`, data);

  return response.data;
};
