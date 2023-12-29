import React from 'react';
import { TITLES } from './constants';
import { PET_PERSONALITIES } from '../Chips/constants';
import PetRegistrationSection from './PetRegistrationSection';
import Chips from '../Chips';
import { usePetRegistration } from '../../contexts/PetRegistrationContext';

function PetPersonalitiesSection() {
  const { formData, setFormData } = usePetRegistration();

  const handleChipSelect = (value) => {
    const currentPersonalities = formData.petPersonalities || [];
    const isAlreadySelected = currentPersonalities.includes(value);

    let updatedPersonalities;
    if (isAlreadySelected) {
      updatedPersonalities = currentPersonalities.filter(
        (chip) => chip !== value
      );
    } else if (currentPersonalities.length < 3) {
      updatedPersonalities = [...currentPersonalities, value];
    }

    if (updatedPersonalities) {
      setFormData({ ...formData, petPersonalities: updatedPersonalities });
    }
  };

  return (
    <PetRegistrationSection
      title={TITLES.PET_PERSONALITIES}
      subTitle={TITLES.OPTION}
    >
      <Chips
        attributes={PET_PERSONALITIES}
        selectedChips={formData.petPersonalities || []}
        onChipSelect={handleChipSelect}
      />
    </PetRegistrationSection>
  );
}

export default PetPersonalitiesSection;
