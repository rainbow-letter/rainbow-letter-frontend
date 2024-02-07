/* eslint-disable */
import apiRequest from '.';

const RESOURCE = '/api/pets';

export const getPets = async (): Promise<any> => {
  const response = await apiRequest.get(`${RESOURCE}`);

  return response;
};

export const getPet = async (id: number): Promise<any> => {
  const response = await apiRequest.get(`${RESOURCE}/${id}`);

  return response;
};

export const registerPet = async (pet: any): Promise<any> => {
  const response = await apiRequest.post(`${RESOURCE}`, pet);

  return response;
};

export const updatePet = async (pet: any, id: number): Promise<any> => {
  const response = await apiRequest.put(`${RESOURCE}/${id}`, pet);

  return response;
};

export const getDashboard = async (): Promise<any> => {
  const response = await apiRequest.get(`${RESOURCE}/dashboard`);

  return response;
};
