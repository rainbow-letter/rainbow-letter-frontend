/* eslint-disable */
import apiRequest from '.';
import { getFormattedDate } from '../utils/date';

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

const today = getFormattedDate();
export const getLettersForAdmin = async (
  startDate = today,
  endDate = today,
  page = 0,
  size = 1
) => {
  const response = await apiRequest.get(
    `${RESOURSE}/admin/list?startDate=${startDate}&endDate=${endDate}&page=${page}&size=${size}`
  );

  return response;
};
