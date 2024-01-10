/* eslint-disable */
import apiRequest from '.';

const RESOURSE = '/api/replies/read';

export const readReply = async (id) => {
  const response = await apiRequest.post(`${RESOURSE}/${id}`);

  return response;
};
