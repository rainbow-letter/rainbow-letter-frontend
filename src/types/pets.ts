import { Dates } from 'types/date';

export interface PetFavorite {
  id: number;
  total: number;
  dayIncreaseCount: number;
  canIncrease: boolean;
}

export interface PetImage {
  id: number | null;
  objectKey: string | null;
  url: string | null;
}

export type PetDashBoard = {
  id: number;
  name: string;
  letterCount: number;
  favoriteCount: number;
  image: PetImage;
  deathAnniversary: string;
};

export interface Pets {
  id: number;
  name: string;
  species: string;
  owner: string;
  personalities: string[];
  deathAnniversary: string;
  image: PetImage;
  favorite: PetFavorite;
}

export interface PetRegister {
  name: string;
  species: string;
  owner: string;
  deathAnniversary: Dates<string>;
  image: {
    id: string;
    url: string;
    file: string;
  };
}
