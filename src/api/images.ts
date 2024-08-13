import apiRequest from 'api';
import { ApiResponse } from 'types/Api';
import { ImageResponse } from 'types/image';

const RESOURCE = '/api/images';

export const getImage = async (key: string): Promise<string> => {
  const response = await apiRequest.get(`${RESOURCE}/resources/${key}`);

  return response.request.responseURL;
};

export const resisterImage = async (file: any): ApiResponse<ImageResponse> => {
  const response = await apiRequest.post(`${RESOURCE}`, file);

  return response;
};
