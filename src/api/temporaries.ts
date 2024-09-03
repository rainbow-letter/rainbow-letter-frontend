import apiRequest from 'api';
import { ApiResponse } from 'types/Api';
import {
  SavedLetterResponse,
  SavedLetterRequest,
  ExistResponse,
  GenerateSavedLetterResponse,
  SessionIdResponse,
} from 'types/temporaries';

const RESOURCE = '/api/temporaries';

export const isExistCheckSavedLetter = async (
  id: number | undefined
): ApiResponse<ExistResponse> => {
  const response = await apiRequest.get(`${RESOURCE}/exists?pet=${id}`);

  return response;
};

export const getSavedLetter = async (
  id: number | undefined
): ApiResponse<SavedLetterResponse> => {
  const response = await apiRequest.get(`${RESOURCE}?pet=${id}`);

  return response;
};

export const generateSavedLetter = async (
  data: SavedLetterRequest
): Promise<GenerateSavedLetterResponse> => {
  const response = await apiRequest.post(`${RESOURCE}`, data);

  return response.data;
};

export const updateSavedLetter = async (
  id: number | null,
  data: SavedLetterRequest
) => {
  const response = await apiRequest.put(`${RESOURCE}/${id}`, data);

  return response.data;
};

export const updateSessionID = async (
  id: number | undefined
): ApiResponse<SessionIdResponse> => {
  const response = await apiRequest.put(`${RESOURCE}/session/${id}`);

  return response;
};

export const deleteSavedLetter = async (
  letterId: number | null,
  petId: number | undefined
) => {
  const response = await apiRequest.delete(
    `${RESOURCE}/${letterId}?pet=${petId}`
  );

  return response.data;
};
