import React from 'react';

import { TITLES } from './constants';
import PetRegistrationSection from './PetRegistrationSection';
import ImageInput from '../Input/ImageInput';
import roundX from '../../assets/roundX.svg';
import { usePetRegistration } from '../../contexts/PetRegistrationContext';

function PetImageSection() {
  const { optionalData, setOptionalData } = usePetRegistration();

  const handleImageChange = ({ target }) => {
    const file = target.files[0];

    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = ({ target: { result } }) => {
        setOptionalData({ ...optionalData, image: result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <PetRegistrationSection
      title={TITLES.PROFILE_IMAGE}
      subTitle={TITLES.OPTION}
    >
      <ImageInput
        imageSrc={optionalData.image}
        deleteIcon={roundX}
        onChange={handleImageChange}
      />
    </PetRegistrationSection>
  );
}

export default PetImageSection;
