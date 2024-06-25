import apiRequest from 'api';

const RESOURCE = '/api/favorite';

export const incrementLikes = async (favoriteId) => {
  const response = await apiRequest.post(`${RESOURCE}/${favoriteId}`);

  return response.data;
};
