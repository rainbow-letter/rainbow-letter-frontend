import { useState, useEffect } from 'react';

import { PetResponse } from 'types/pets';
import { getImage } from 'api/images';
import defaultImage from 'assets/Logo_256px.png';

export default function useGetImage(pet: PetResponse | undefined | null) {
  const [petImage, setPetImage] = useState<string>('');

  useEffect(() => {
    const getPetImage = async () => {
      if (pet?.image) {
        const image = await getImage(pet?.image);
        return setPetImage(image);
      }

      return setPetImage(defaultImage);
    };

    getPetImage();
  }, [pet]);
  return { petImage };
}
