import apiRequest from 'api';
import { formatDateToYMD } from '../utils/date';
import {
  LetterRequest,
  LetterListResponse,
  LetterItemResponse,
} from 'types/letters';
import { ApiResponse } from 'types/Api';

const RESOURCE = '/api/letters';

export const getLetterList = async (
  petId: number | undefined
): ApiResponse<{
  letters: LetterListResponse[];
}> => {
  const response = await apiRequest.get(`${RESOURCE}/box?pet=${petId}`);

  return response;
};

export const getLetterListByDate = async (
  petId: number | undefined,
  startDate?: number | string,
  endDate?: number | string
): ApiResponse<{
  letters: LetterListResponse[];
}> => {
  const response = await apiRequest.get(
    `${RESOURCE}/box?pet=${petId}&start=${startDate}&end=${endDate}`
  );

  return response;
};

export const getLetter = async (
  id: string | undefined
): ApiResponse<LetterItemResponse> => {
  const response = await apiRequest.get(`${RESOURCE}/${id}`);

  return response;
};

export const sendLetter = async (
  id: number | undefined,
  letter: LetterRequest
) => {
  const response = await apiRequest.post(`${RESOURCE}?pet=${id}`, letter);

  return response;
};

export const getShareLetter = async (
  uuid: string | undefined
): ApiResponse<LetterItemResponse> => {
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

  return response.data;
};
