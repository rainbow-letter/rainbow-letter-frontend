import React from 'react';

import { TITLES } from './constants';
import PetRegistrationSection from './PetRegistrationSection';
import ImageInput from '../Input/ImageInput';
import roundX from '../../assets/roundX.svg';
import { usePetRegistration } from '../../contexts/PetRegistrationContext';

function PetImageSection() {
  const { mandatoryData, setMandatoryData } = usePetRegistration();

  const handleImageChange = ({ target }) => {
    const file = target.files[0];

    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = ({ target: { result } }) => {
        setMandatoryData({ ...mandatoryData, image: result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setMandatoryData({ ...mandatoryData, image: '' });
  };

  return (
    <PetRegistrationSection title={TITLES.PROFILE_IMAGE}>
      <ImageInput
        imageSrc={mandatoryData.image}
        deleteIcon={roundX}
        onChange={handleImageChange}
        onDelete={handleImageDelete}
      />
    </PetRegistrationSection>
  );
}

export default PetImageSection;
