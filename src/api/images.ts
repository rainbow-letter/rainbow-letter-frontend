import apiRequest from 'api';

const RESOURCE = '/api/images';

export const getImage = async (key: string): Promise<string> => {
  const response = await apiRequest.get(`${RESOURCE}/resources/${key}`);

  return response.request.responseURL;
};

export const updateImageAndGetId = async (data: any): Promise<any> => {
  const response = await apiRequest.post(`${RESOURCE}/upload?type=PET`, data);

  return response.data;
};
