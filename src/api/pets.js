/* eslint-disable */
import apiRequest from '.';

const RESOURSE = '/api/pets';

export const getPetsList = async () => {
  const response = await apiRequest.get(`${RESOURSE}`);

  return response;
};

export const registerPet = async (pet) => {
  const response = await apiRequest.post('/api/pets', pet);

  return response;
};
