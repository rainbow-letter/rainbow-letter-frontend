import { useState, useEffect, useRef } from 'react';

import Chips from 'components/Chips';
import Chip from 'components/Chips/Chip';
import MiscInput from 'components/Input/MiscInput';
import InputAlert from 'components/InputAlert';
import { PET_TYPES } from 'components/Chips/constants';
import useAutoFocus from 'hooks/useAutoFocus';
import { TITLES, INFO_MESSAGES } from './constants';
import PetRegistrationSection from './PetRegistrationSection';
import { usePetRegistration } from '../../contexts/PetRegistrationContext';

function PetTypeSection() {
  const miscInputRef = useRef(null);
  const { mandatoryData, setMandatoryData } = usePetRegistration();

  const [selectedType, setSelectedType] = useState(mandatoryData.species);
  const [miscValue, setMiscValue] = useState('');
  const [isMiscValueInvalid, setIsMiscValueInvalid] = useState(false);

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
    const role = PET_TYPES.find((t) => t.NAME === mandatoryData.species);

    if (role) {
      setSelectedType(mandatoryData.species);
    } else if (mandatoryData.species) {
      setSelectedType('기타');
      setMiscValue(mandatoryData.species);
    }
  }, [mandatoryData]);

  useEffect(() => {
    if (miscValue.length === 0 || miscValue.length > 10) {
      setIsMiscValueInvalid(true);
    } else {
      setIsMiscValueInvalid(false);
    }
  }, [miscValue]);

  const shouldFocus = selectedType === '기타';
  useAutoFocus(shouldFocus, miscInputRef);

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
