import React, { useState, useEffect } from 'react';

import { getPets } from 'api/pets';
import { PetResponse } from 'types/pets';
import CoverImage from 'components/Common/CoverImage';
import InfoBox from 'components/LetterBox/InfoBox';
import PetsToggle from 'components/LetterBox/PetsToggle';
import Divider from 'components/Home/Divider';
import useGetImage from 'hooks/useGetImage';

type Props = {
  onChange: (pet: PetResponse) => void;
  petsList: PetResponse[];
  selectedPet: null | PetResponse;
};

export default function PetInfoCard({
  onChange,
  petsList,
  selectedPet,
}: Props) {
  const { image } = useGetImage(selectedPet);

  useEffect(() => {
    (async () => {
      const { data } = await getPets();

      onChange(data.pets[0]);
    })();
  }, []);

  return (
    <section>
      <PetsToggle
        selectedPet={selectedPet?.name}
        petsList={petsList}
        onChange={onChange}
      />
      <CoverImage image={image} />
      <InfoBox pet={selectedPet} />
      <Divider />
    </section>
  );
}
