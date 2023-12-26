import React, { useState } from 'react';

import { TITLES, INFO_MESSAGES } from './constants';
import Input from '../Input';
import PetRegistrationSection from './PetRegistrationSection';

function PetNameSection() {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <PetRegistrationSection title={TITLES.PET_NAME}>
      <div className="flex flex-col">
        <Input
          className="w-full h-[60px] text-caption"
          placeholder={INFO_MESSAGES.ENTER_NAME}
          value={name}
          onChange={handleInputChange}
        />
        {!!name && (
          <span className="p-[10px] text-alarm-red text-caption">
            {INFO_MESSAGES.UNCHANGEABLE_NAME_NOTICE}
          </span>
        )}
      </div>
    </PetRegistrationSection>
  );
}

export default PetNameSection;
