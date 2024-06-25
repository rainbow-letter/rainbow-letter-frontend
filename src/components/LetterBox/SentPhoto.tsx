import { useState, useEffect } from 'react';

import { getImage } from 'api/images';
import defaultImage from 'assets/Logo_256px.png';
import CoverImage from 'components/CoverImage';
import { Letter } from 'types/letters';

type Props = {
  letterData: Letter;
};

export default function SentPhoto({ letterData }: Props) {
  const [petImage, setPetImage] = useState<string>('');

  useEffect(() => {
    const getPetImage = async () => {
      if (letterData.image?.objectKey) {
        const data = await getImage(letterData.image.objectKey);
        return setPetImage(data);
      }

      return setPetImage(defaultImage);
    };

    getPetImage();
  }, []);

  return (
    <section className="not-img mt-16">
      <h3 className="text-solo-large">아이에게 보낸 편지</h3>
      <CoverImage image={petImage} className="relative mt-8" />
    </section>
  );
}
