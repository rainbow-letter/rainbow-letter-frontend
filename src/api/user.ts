/* eslint-disable */
import apiRequest from '.';

const RESOURCE = '/api/members';

type UserRequestData = {
  email: string;
};

type LoginRequestData = UserRequestData & {
  password: string;
};

export const trySignUp = async (data: UserRequestData): Promise<any> => {
  const response = await apiRequest.post(`${RESOURCE}`, data);

  return response;
};

export const tryLogin = async (data: LoginRequestData): Promise<any> => {
  const response = await apiRequest.post(`${RESOURCE}/login`, data);

  return response;
};

export const authEmail = async (email: UserRequestData) => {
  const response = await apiRequest.post(`${RESOURCE}/password/find`, email);

  return response;
};

export const updatePassword = async (data: any): Promise<any> => {
  const response = await apiRequest.put(`${RESOURCE}/password/reset`, data);

  return response;
};

export const updatePhoneNumber = async (data: any): Promise<any> => {
  const response = await apiRequest.put(`${RESOURCE}/phoneNumber`, data);

  return response;
};

export const deletePhoneNumber = async (): Promise<any> => {
  const response = await apiRequest.delete(`${RESOURCE}/phoneNumber`);

  return response;
};

export const getUserInfo = async (): Promise<any> => {
  const response = await apiRequest.get(`${RESOURCE}/info`);

  return response;
};

export const deleteUser = async (): Promise<any> => {
  const response = await apiRequest.delete(`${RESOURCE}/leave`);

  return response;
};
