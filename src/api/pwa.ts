/* eslint-disable */
import apiRequest from 'api';

const RESOURCE = '/api/data';

export const postData = async (event: any): Promise<any> => {
  const response = await apiRequest.post(`${RESOURCE}`, event);

  return response;
};
