/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { Status, Error } from 'types/store';

type PetImage = {
  id: string;
  objectKey: string;
  url: string;
};

type PetFavorite = {
  id: number;
  total: number;
  dayIncreaseCount: number;
  canIncrease: boolean;
};

export type PetBase = {
  id: number;
  name: string;
  species: string;
  owner: string;
  personalities: string[];
  deathAnniversary: string;
};

export type Pet = PetBase & {
  image: PetImage['id'];
};

export type PetDetail = PetBase & {
  image: PetImage;
  favorite: PetFavorite;
};

type petState = {
  pets: PetDetail[];
  status: Status;
  error: Error;
};

const initialState: petState = {
  pets: [],
  status: 'idle',
  error: null,
};

const petSlice = createSlice({
  name: 'pet',
  initialState,
  reducers: {},
});

export const petActions = petSlice.actions;
export default petSlice;
