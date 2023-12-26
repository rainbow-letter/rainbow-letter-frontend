import React, { useState } from 'react';

import { TITLES } from './constants';
import { ROLES_FOR_PETS } from '../Chips/constants';
import PetRegistrationSection from './PetRegistrationSection';
import Chips from '../Chips';
import Chip from '../Chips/Chip';
import MiscInput from '../Input/MiscInput';

function RoleForPetSection() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [miscValue, setMiscValue] = useState('');

  const handleChipSelect = (value) => {
    setSelectedRole(value);
    setMiscValue('');
  };

  const handleMiscInputChange = (event) => {
    setMiscValue(event.target.value);
  };

  return (
    <PetRegistrationSection title={TITLES.ROLES_FOR_PETS}>
      <Chips
        attributes={ROLES_FOR_PETS}
        selectedChips={selectedRole ? [selectedRole] : []}
        onChipSelect={handleChipSelect}
      />
      {selectedRole === '기타' ? (
        <MiscInput value={miscValue} onChange={handleMiscInputChange} />
      ) : (
        <Chip value="기타" onClick={() => setSelectedRole('기타')} />
      )}
    </PetRegistrationSection>
  );
}

export default RoleForPetSection;
