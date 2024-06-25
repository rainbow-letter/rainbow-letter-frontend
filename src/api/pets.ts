import apiRequest from 'api';

const RESOURCE = '/api/pets';

export const getPets = async (): Promise<any> => {
  const response = await apiRequest.get(`${RESOURCE}`);

  return response.data;
};

export const getPet = async (id: number): Promise<any> => {
  const response = await apiRequest.get(`${RESOURCE}/${id}`);

  return response.data;
};

export const registerPet = async (pet: any): Promise<any> => {
  const response = await apiRequest.post(`${RESOURCE}`, pet);

  return response.data;
};

export const updatePet = async (pet: any, id: string): Promise<any> => {
  const response = await apiRequest.put(`${RESOURCE}/${id}`, pet);

  return response.data;
};

export const getDashboard = async (): Promise<any> => {
  const response = await apiRequest.get(`${RESOURCE}/dashboard`);

  return response.data;
};
