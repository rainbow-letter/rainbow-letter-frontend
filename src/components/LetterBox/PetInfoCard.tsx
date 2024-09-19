import { useEffect } from 'react';

import { getPets } from 'api/pets';
import { PetResponse } from 'types/pets';
import CoverImage from 'components/Common/CoverImage';
import InfoBox from 'components/LetterBox/InfoBox';
import PetsToggle from 'components/LetterBox/PetsToggle';
import Divider from 'components/Home/Divider';
import { formatImageType } from 'utils/image';

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
  return (
    <section>
      <PetsToggle
        selectedPet={selectedPet?.name}
        petsList={petsList}
        onChange={onChange}
      />
      <CoverImage image={formatImageType(selectedPet?.image)} />
      <InfoBox pet={selectedPet} />
      <Divider />
    </section>
  );
}
