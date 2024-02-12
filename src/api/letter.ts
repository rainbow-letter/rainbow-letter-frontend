/* eslint-disable */
import apiRequest from 'api';
import { formatDateToYMD } from '../utils/date';

const RESOURCE = '/api/letters';

export const getLetters = async (): Promise<any> => {
  const response = await apiRequest.get(`${RESOURCE}/list`);

  return response;
};

export const getLetter = async (id: any): Promise<any> => {
  const response = await apiRequest.get(`${RESOURCE}/${id}`);

  return response;
};

export const sendLetter = async (id: any, letter: any): Promise<any> => {
  const response = await apiRequest.post(`${RESOURCE}?pet=${id}`, letter);

  return response;
};

export const getShareLetter = async (uuid: any): Promise<any> => {
  const response = await apiRequest.get(`${RESOURCE}/share/${uuid}`);

  return response;
};

// For admin
const TODAY = formatDateToYMD();
const DEFAULT_LETTERS_PER_PAGE = 25;
export const getLettersForAdmin = async (
  startDate = TODAY,
  endDate = TODAY,
  page = 0,
  size = DEFAULT_LETTERS_PER_PAGE
) => {
  const response = await apiRequest.get(
    `${RESOURCE}/admin/list?startDate=${startDate}&endDate=${endDate}&page=${page}&size=${size}`
  );

  return response;
};
