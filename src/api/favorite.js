/* eslint-disable */
import apiRequest from '.';

const RESOURSE = '/api/favorite';

export const incrementLikes = async (favoriteId) => {
  const response = await apiRequest.post(`${RESOURSE}/${favoriteId}`);

  return response;
};
