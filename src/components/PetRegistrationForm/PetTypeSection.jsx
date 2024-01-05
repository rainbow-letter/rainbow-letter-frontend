import React, { useState, useEffect, useRef } from 'react';

import { TITLES, INFO_MESSAGES } from './constants';
import { PET_TYPES } from '../Chips/constants';
import PetRegistrationSection from './PetRegistrationSection';
import Chip from '../Chips/Chip';
import Chips from '../Chips';
import MiscInput from '../Input/MiscInput';
import InputAlert from '../InputAlert';
import { usePetRegistration } from '../../contexts/PetRegistrationContext';
import useAutoFocus from '../../hooks/useAutoFocus';

function PetTypeSection() {
  const miscInputRef = useRef(null);
  const [selectedType, setSelectedType] = useState(null);
  const [miscValue, setMiscValue] = useState('');
  const [isMiscValueInvalid, setIsMiscValueInvalid] = useState(false);
  const { mandatoryData, setMandatoryData } = usePetRegistration();

  const shouldFocus = selectedType === '기타';
  useAutoFocus(shouldFocus, miscInputRef);

  const handleChipSelect = (value) => {
    setSelectedType(value);

    if (value !== '기타') {
      setMiscValue('');
      setMandatoryData({ ...mandatoryData, species: value });
    }
  };

  const handleMiscInputChange = ({ target }) => {
    setMiscValue(target.value);
  };

  const handleMiscInputBlur = () => {
    if (selectedType === '기타' && miscValue) {
      setMandatoryData({ ...mandatoryData, species: miscValue });
    }
  };

  useEffect(() => {
    if (miscValue.length === 0 || miscValue.length > 10) {
      setIsMiscValueInvalid(true);
    } else {
      setIsMiscValueInvalid(false);
    }
  }, [miscValue]);

  return (
    <PetRegistrationSection title={TITLES.PET_TYPES}>
      <Chips
        attributes={PET_TYPES}
        selectedChips={selectedType ? [selectedType] : []}
        onChipSelect={handleChipSelect}
      />
      {selectedType === '기타' ? (
        <>
          <MiscInput
            ref={miscInputRef}
            isInvalid={isMiscValueInvalid}
            value={miscValue}
            onChange={handleMiscInputChange}
            onBlur={handleMiscInputBlur}
          />
          <InputAlert
            message={INFO_MESSAGES.ENTER_WITHIN_10_CHARS}
            isVisible={isMiscValueInvalid}
          />
        </>
      ) : (
        <Chip value="기타" onClick={() => handleChipSelect('기타')} />
      )}
    </PetRegistrationSection>
  );
}

export default PetTypeSection;
