import apiRequest from 'api';

const RESOURCE = '/api/faqs';

export const getFaqs = async () => {
  const response = await apiRequest.get(`${RESOURCE}/list`);

  return response.data;
};

export const getFagsForAdmin = async () => {
  const response = await apiRequest.get(`${RESOURCE}/list/admin`);

  return response.data;
};

export const createFaqForAdmin = async (data) => {
  const response = await apiRequest.post(`${RESOURCE}`, data);

  return response.data;
};

export const updateFaqForAdmin = async (data, id) => {
  const response = await apiRequest.put(`${RESOURCE}/${id}`, data);

  return response.data;
};

export const changeFaqSequenceForAdmin = async (data, id) => {
  const response = await apiRequest.put(`${RESOURCE}/sequence/${id}`, data);

  return response.data;
};

export const deleteFaqForAdmin = async (id) => {
  const response = await apiRequest.delete(`${RESOURCE}/${id}`);

  return response.data;
};
