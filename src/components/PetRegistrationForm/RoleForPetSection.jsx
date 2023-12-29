import React, { useState, useEffect } from 'react';

import { TITLES } from './constants';
import { ROLES_FOR_WOMEN, ROLES_FOR_MEN } from '../Chips/constants';
import PetRegistrationSection from './PetRegistrationSection';
import Chips from '../Chips';
import Chip from '../Chips/Chip';
import MiscInput from '../Input/MiscInput';
import { usePetRegistration } from '../../contexts/PetRegistrationContext';

function RoleForPetSection() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [miscValue, setMiscValue] = useState('');
  const { formData, setFormData } = usePetRegistration();

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
      setFormData({ ...formData, owner: miscValue });
    }
  };

  useEffect(() => {
    if (selectedRole && selectedRole !== '기타') {
      setFormData({ ...formData, owner: selectedRole });
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
        <MiscInput
          value={miscValue}
          onChange={handleMiscInputChange}
          onBlur={handleMiscInputBlur}
        />
      ) : (
        <Chip value="기타" onClick={() => setSelectedRole('기타')} />
      )}
    </PetRegistrationSection>
  );
}

export default RoleForPetSection;
