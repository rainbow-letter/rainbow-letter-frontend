/* eslint-disable */
import apiRequest from '.';
import { formatDateToYMD } from '../utils/date';

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

export const getShareLetter = async (uuid) => {
  const response = await apiRequest.get(`${RESOURSE}/share/${uuid}`);

  return response;
};

// For admin
const TODAY = formatDateToYMD();
const DEFAULT_LETTERS_PER_PAGE = 20;
export const getLettersForAdmin = async (
  startDate = TODAY,
  endDate = TODAY,
  page = 0,
  size = DEFAULT_LETTERS_PER_PAGE
) => {
  const response = await apiRequest.get(
    `${RESOURSE}/admin/list?startDate=${startDate}&endDate=${endDate}&page=${page}&size=${size}`
  );

  return response;
};
