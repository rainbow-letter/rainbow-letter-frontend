/* eslint-disable */
import apiRequest from '.';

const RESOURSE = '/api/pets';

export const getPets = async () => {
  const response = await apiRequest.get(`${RESOURSE}`);

  return response;
};

export const getPet = async (id) => {
  const response = await apiRequest.get(`${RESOURSE}/${id}`);

  return response;
};

export const registerPet = async (pet) => {
  const response = await apiRequest.post(`${RESOURSE}`, pet);

  return response;
};
