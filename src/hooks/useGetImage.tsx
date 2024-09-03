import { useState, useEffect } from 'react';

import { getImage } from 'api/images';
import defaultImage from 'assets/Logo_256px.png';

export default function useGetImage(pet: any) {
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    const getPetImage = async () => {
      if (pet?.image) {
        const image = await getImage(pet?.image);
        return setImage(image);
      }

      if (pet) {
        const image = await getImage(pet);
        return setImage(image);
      }

      return setImage(defaultImage);
    };

    getPetImage();
  }, [pet]);

  return { image, setImage };
}
