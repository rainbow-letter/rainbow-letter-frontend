import React, { useState, useEffect } from 'react';

import { getPets } from 'api/pets';
import { Pets } from 'types/pets';
import { getImage } from 'api/images';
import CoverImage from 'components/Common/CoverImage';
import InfoBox from 'components/LetterBox/InfoBox';
import PetsToggle from 'components/LetterBox/PetsToggle';
import Divider from 'components/Home/Divider';
import defaultImage from 'assets/Logo_256px.png';

type Props = {
  onChange: (pet: Pets) => void;
  selectedPet: null | Pets;
};

export default function PetInfoCard({ onChange, selectedPet }: Props) {
  const [petsList, setPetsList] = useState<Pets[]>([]);
  const [petImage, setPetImage] = useState('');

  useEffect(() => {
    (async () => {
      const { pets } = await getPets();

      setPetsList(pets || []);
      onChange(pets[0]);
    })();
  }, []);

  useEffect(() => {
    const getPetImage = async () => {
      if (selectedPet?.image.objectKey) {
        const image = await getImage(selectedPet?.image.objectKey);
        return setPetImage(image);
      }

      return setPetImage(defaultImage);
    };

    getPetImage();
  }, [selectedPet?.id]);

  return (
    <section>
      <PetsToggle
        selectedPet={selectedPet?.name}
        petsList={petsList}
        onChange={onChange}
      />
      <CoverImage image={petImage} />
      <InfoBox pet={selectedPet} />
      <Divider />
    </section>
  );
}
