import React, { useState } from 'react';
import { TITLES } from './constants';
import { PET_TYPES } from '../Chips/constants';
import PetRegistrationSection from './PetRegistrationSection';
import Chip from '../Chips/Chip';
import Chips from '../Chips';
import MiscInput from '../Input/MiscInput';

function PetTypeSection() {
  const [selectedType, setSelectedType] = useState(null);
  const [miscValue, setMiscValue] = useState('');

  const handleChipSelect = (value) => {
    setSelectedType(value);
  };

  const handleMiscInputChange = (event) => {
    setMiscValue(event.target.value);
  };

  return (
    <PetRegistrationSection title={TITLES.PET_TYPES}>
      <Chips
        attributes={PET_TYPES}
        selectedChips={selectedType ? [selectedType] : []}
        onChipSelect={handleChipSelect}
      />
      {selectedType === '기타' ? (
        <MiscInput value={miscValue} onChange={handleMiscInputChange} />
      ) : (
        <Chip value="기타" onClick={() => setSelectedType('기타')} />
      )}
    </PetRegistrationSection>
  );
}

export default PetTypeSection;
