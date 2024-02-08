/* eslint-disable */
import apiRequest from '.';

const RESOURCE = '/api/images';

export const updateImageAndGetId = async (data: any): Promise<any> => {
  const response = await apiRequest.post(`${RESOURCE}/upload?type=PET`, data);

  return response;
};
