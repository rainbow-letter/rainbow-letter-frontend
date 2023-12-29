import React, { useState } from 'react';

import { TITLES } from './constants';
import { PET_TYPES } from '../Chips/constants';
import PetRegistrationSection from './PetRegistrationSection';
import Chip from '../Chips/Chip';
import Chips from '../Chips';
import MiscInput from '../Input/MiscInput';
import { usePetRegistration } from '../../contexts/PetRegistrationContext';

function PetTypeSection() {
  const [selectedType, setSelectedType] = useState(null);
  const [miscValue, setMiscValue] = useState('');
  const { formData, setFormData } = usePetRegistration();

  const handleChipSelect = (value) => {
    if (value !== '기타') {
      setSelectedType(value);
      setMiscValue('');
      setFormData({ ...formData, species: value });
    } else {
      setSelectedType(value);
    }
  };

  const handleMiscInputChange = ({ target }) => {
    setMiscValue(target.value);
  };

  const handleMiscInputBlur = () => {
    if (selectedType === '기타' && miscValue) {
      setFormData({ ...formData, species: miscValue });
    }
  };

  return (
    <PetRegistrationSection title={TITLES.PET_TYPES}>
      <Chips
        attributes={PET_TYPES}
        selectedChips={selectedType ? [selectedType] : []}
        onChipSelect={handleChipSelect}
      />
      {selectedType === '기타' ? (
        <MiscInput
          value={miscValue}
          onChange={handleMiscInputChange}
          onBlur={handleMiscInputBlur}
        />
      ) : (
        <Chip value="기타" onClick={() => handleChipSelect('기타')} />
      )}
    </PetRegistrationSection>
  );
}

export default PetTypeSection;
