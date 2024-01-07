/* eslint-disable */
import apiRequest from '.';

const RESOURSE = '/api/letters';

export const getLetters = async () => {
  const response = await apiRequest.get(`${RESOURSE}/list`);

  return response;
};

export const getLetter = async (id) => {
  const response = await apiRequest.get(`${RESOURSE}/${id}`);

  return response;
};

export const sendLetter = async (id, letter) => {
  const response = await apiRequest.post(`${RESOURSE}?pet=${id}`, letter);

  return response;
};
