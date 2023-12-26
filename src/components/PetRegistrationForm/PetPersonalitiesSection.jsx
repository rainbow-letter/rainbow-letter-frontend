import React, { useState } from 'react';
import { TITLES } from './constants';
import { PET_PERSONALITIES } from '../Chips/constants';
import PetRegistrationSection from './PetRegistrationSection';
import Chips from '../Chips';

function PetPersonalitiesSection() {
  const [selectedPersonalities, setSelectedPersonalities] = useState([]);

  const handleChipSelect = (value) => {
    const isAlreadySelected = selectedPersonalities.includes(value);
    if (isAlreadySelected) {
      setSelectedPersonalities(
        selectedPersonalities.filter((chip) => chip !== value)
      );
    } else if (selectedPersonalities.length < 3) {
      setSelectedPersonalities([...selectedPersonalities, value]);
    }
  };

  return (
    <PetRegistrationSection
      title={TITLES.PET_PERSONALITIES}
      subTitle={TITLES.OPTION}
    >
      <Chips
        attributes={PET_PERSONALITIES}
        selectedChips={selectedPersonalities}
        onChipSelect={handleChipSelect}
      />
    </PetRegistrationSection>
  );
}

export default PetPersonalitiesSection;
