import apiRequest from 'api';

const RESOURCE = '/api/faqs';

export const getFaqs = async () => {
  const response = await apiRequest.get(`${RESOURCE}/list`);

  return response;
};

export const getFagsForAdmin = async () => {
  const response = await apiRequest.get(`${RESOURCE}/list/admin`);

  return response;
};

export const createFaqForAdmin = async (data) => {
  const response = await apiRequest.post(`${RESOURCE}`, data);

  return response;
};

export const updateFaqForAdmin = async (data, id) => {
  const response = await apiRequest.put(`${RESOURCE}/${id}`, data);

  return response;
};

export const changeFaqSequenceForAdmin = async (data, id) => {
  const response = await apiRequest.put(`${RESOURCE}/sequence/${id}`, data);

  return response;
};

export const deleteFaqForAdmin = async (id) => {
  const response = await apiRequest.delete(`${RESOURCE}/${id}`);

  return response;
};
