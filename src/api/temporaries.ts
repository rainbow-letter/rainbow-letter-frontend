import apiRequest from 'api';
import { ApiResponse } from 'types/Api';

import { SavedLetterResponse, SavedLetterRequest } from 'types/temporaries';

const RESOURCE = '/api/temporaries';

export const isExistCheckSavedLetter = async (): ApiResponse<boolean> => {
  const response = await apiRequest.get(`${RESOURCE}/exists`);

  return response.data;
};

export const getSavedLetter = async (): ApiResponse<SavedLetterResponse> => {
  const response = await apiRequest.get(`${RESOURCE}`);

  return response;
};

export const generateSavedLetter = async (
  data: SavedLetterRequest
): Promise<string> => {
  const response = await apiRequest.post(`${RESOURCE}`, data);

  return response.data;
};

export const deleteSavedLetter = async (id: string | undefined) => {
  const response = await apiRequest.delete(`${RESOURCE}?temporary=${id}`);

  return response.data;
};

export const updateSavedLetter = async (data: SavedLetterRequest) => {
  const response = await apiRequest.put(`${RESOURCE}`, data);

  return response.data;
};

export const updateSessionID = async (
  id: string | undefined
): Promise<string> => {
  const response = await apiRequest.put(`${RESOURCE}/session?temporary=${id}`);

  return response.data;
};
