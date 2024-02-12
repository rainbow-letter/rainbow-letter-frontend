import { createAsyncThunk } from '@reduxjs/toolkit';

import { Pet, PetBase, PetDetail } from 'store/pet/pet-slice';
import api from 'api';

type PetRegistrationData = Omit<PetBase, 'id'> & { image: number };

type PetUpdatePayload = {
  id: Pet['id'];
  data: PetRegistrationData;
};

export const fetchPets = createAsyncThunk(
  'pet/fetchPets',
  async (): Promise<PetDetail[]> => {
    const response = await api.get(`/api/pets`);
    return response.data;
  }
);

export const fetchPet = createAsyncThunk(
  'pet/fetchPet',
  async (id: Pet['id']): Promise<PetDetail> => {
    const response = await api.get(`/api/pet/${id}`);
    return response.data;
  }
);

export const registerPet = createAsyncThunk(
  'pet/registerPet',
  async (data: PetRegistrationData) => {
    const response = await api.post(`/api/pets`, data);
    return response.data;
  }
);

export const updatePet = createAsyncThunk(
  'pet/updatePet',
  async ({ id, data }: PetUpdatePayload) => {
    const response = await api.put(`/api/pets/${id}`, data);
    return response;
  }
);

export const deletePetImage = createAsyncThunk(
  'pet/deleteImage',
  async (id: Pet['id']) => {
    const response = await api.delete(`/api/pets/${id}/image`);
    return response;
  }
);
