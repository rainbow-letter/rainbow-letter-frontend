/* eslint-disable */
import apiRequest from '.';

const RESOURSE = '/api/pets';

export const getPetsList = async () => {
  const response = await apiRequest.get(`${RESOURSE}`);

  return response;
};
