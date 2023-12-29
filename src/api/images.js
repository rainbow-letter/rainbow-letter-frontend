/* eslint-disable */
import apiRequest from '.';

const RESOURSE = '/api/images';

export const updateImageAndGetId = async (data) => {
  const response = await apiRequest.post(`${RESOURSE}/upload?type=pet`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response;
};
