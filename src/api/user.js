/* eslint-disable */
import apiRequest from '.';

const RESOURCE = '/api/members';

export const trySignUp = async (data) => {
  const response = await apiRequest.post(`${RESOURCE}`, data);

  return response;
};

export const tryLogin = async (data) => {
  const response = await apiRequest.post(`${RESOURCE}/login`, data);

  return response;
};

export const authEmail = async (email) => {
  const response = await apiRequest.post(`${RESOURCE}/password/find`, email);

  return response;
};

export const updatePassword = async (data) => {
  const response = await apiRequest.put(`${RESOURCE}/password/reset`, data);

  return response;
};

export const updatePhoneNumber = async (data) => {
  const response = await apiRequest.put(`${RESOURCE}/phoneNumber`, data);

  return response;
};

export const deletePhoneNumber = async () => {
  const response = await apiRequest.delete(`${RESOURCE}/phoneNumber`);

  return response;
};

export const getUserInfo = async () => {
  const response = await apiRequest.get(`${RESOURCE}/info`);

  return response;
};

export const deleteUser = async () => {
  const response = await apiRequest.delete(`${RESOURCE}/leave`);

  return response;
};
