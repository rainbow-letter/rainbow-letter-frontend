/* eslint-disable */
import apiRequest from '.';

const RESOURSE = '/api/images';

export const updateImageAndGetId = async (data) => {
  const response = await apiRequest.post(`${RESOURSE}/upload?type=PET`, data);

  return response;
};
