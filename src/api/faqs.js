// eslint-disable-next-line import/no-cycle
import apiRequest from '.';

const RESOURSE = '/api/faqs';

export const getFaqs = async () => {
  const response = await apiRequest.get(`${RESOURSE}/list`);

  return response;
};

export const getFagsWithAdmin = async () => {
  const response = await apiRequest.get(`${RESOURSE}/list/admin`);

  return response;
};

export const createFaqWithAdmin = async (data) => {
  const response = await apiRequest.post(`${RESOURSE}`, data);

  return response;
};

export const updateFaqWithAdmin = async (data, id) => {
  const response = await apiRequest.put(`${RESOURSE}/${id}`, data);

  return response;
};

export const changeFaqSequenceWithAdmin = async (data, id) => {
  const response = await apiRequest.put(`${RESOURSE}/sequence/${id}`, data);

  return response;
};

export const deleteFaqWithAdmin = async (id) => {
  const response = await apiRequest.delete(`${RESOURSE}/${id}`);

  return response;
};
