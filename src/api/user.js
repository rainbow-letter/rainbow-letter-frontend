import apiRequest from '.';

const RESOURSE = '/api/members';

export const trySignUp = async (data) => {
  const response = await apiRequest.post(`${RESOURSE}`, data);

  return response;
};

export const trylogin = async (data) => {
  const response = await apiRequest.post(`${RESOURSE}/login`, data);

  return response;
};