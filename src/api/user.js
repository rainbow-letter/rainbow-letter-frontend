/* eslint-disable */
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

export const authEmail = async (email) => {
  const response = await apiRequest.post(`${RESOURSE}/password/find`, email);

  return response;
};

export const updatePassword = async (data) => {
  const response = await apiRequest.put(`${RESOURSE}/password/reset`, data);

  return response;
};

export const updatePhoneNumber = async (data) => {
  const response = await apiRequest.put(`${RESOURSE}/phoneNumber`, data);

  return response;
};

export const deletePhoneNumber = async () => {
  const response = await apiRequest.delete(`${RESOURSE}/phoneNumber`);

  return response;
};

export const getUserInfo = async () => {
  const response = await apiRequest.get(`${RESOURSE}/info`);

  return response;
};

export const deactivateUser = async () => {
  const response = await apiRequest.delete(`${RESOURSE}/leave`);

  return response;
};
