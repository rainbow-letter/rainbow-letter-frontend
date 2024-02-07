export interface PetFavorite {
  id: number;
  total: number;
  dayIncreaseCount: number;
  canIncrease: boolean;
}

export interface PetImage {
  id: number;
  objectKey: string;
  url: string;
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
