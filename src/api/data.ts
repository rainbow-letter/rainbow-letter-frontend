/* eslint-disable */
import apiRequest from 'api';

const RESOURCE = '/api/data';

type DataRequest = {
  event: string;
};

export const postData = async (event: DataRequest) => {
  const response = await apiRequest.post(`${RESOURCE}`, event);

  return response;
};
