import React, { useState, useEffect, useRef } from 'react';

import { TITLES, INFO_MESSAGES } from './constants';
import { ROLES_FOR_WOMEN, ROLES_FOR_MEN } from '../Chips/constants';
import PetRegistrationSection from './PetRegistrationSection';
import Chips from '../Chips';
import Chip from '../Chips/Chip';
import MiscInput from '../Input/MiscInput';
import InputAlert from '../InputAlert';
import { usePetRegistration } from '../../contexts/PetRegistrationContext';
import useAutoFocus from '../../hooks/useAutoFocus';

function RoleForPetSection() {
  const miscInputRef = useRef(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [miscValue, setMiscValue] = useState('');
  const [isMiscValueInvalid, setIsMiscValueInvalid] = useState(false);
  const { mandatoryData, setMandatoryData } = usePetRegistration();

  const shouldFocus = selectedRole === '기타';
  useAutoFocus(shouldFocus, miscInputRef);

  const handleChipSelect = (value) => {
    setSelectedRole(value);
    if (value !== '기타') {
      setMiscValue('');
    }
  };

  const handleMiscInputChange = ({ target }) => {
    setMiscValue(target.value);
  };

  const handleMiscInputBlur = () => {
    if (selectedRole === '기타') {
      setMandatoryData({ ...mandatoryData, owner: miscValue });
    }
  };

  useEffect(() => {
    if (miscValue.length === 0 || miscValue.length > 10) {
      setIsMiscValueInvalid(true);
    } else {
      setIsMiscValueInvalid(false);
    }
  }, [miscValue]);

  useEffect(() => {
    if (selectedRole && selectedRole !== '기타') {
      setMandatoryData({ ...mandatoryData, owner: selectedRole });
    }
  }, [selectedRole]);

  return (
    <PetRegistrationSection title={TITLES.ROLES_FOR_PETS}>
      <Chips
        attributes={ROLES_FOR_WOMEN}
        selectedChips={selectedRole ? [selectedRole] : []}
        onChipSelect={handleChipSelect}
      />
      <Chips
        attributes={ROLES_FOR_MEN}
        selectedChips={selectedRole ? [selectedRole] : []}
        onChipSelect={handleChipSelect}
      />
      {selectedRole === '기타' ? (
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
        <Chip value="기타" onClick={() => setSelectedRole('기타')} />
      )}
    </PetRegistrationSection>
  );
}

export default RoleForPetSection;
