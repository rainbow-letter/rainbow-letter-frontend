import React from 'react';

import { TITLES, INFO_MESSAGES } from './constants';
import Input from '../Input';
import PetRegistrationSection from './PetRegistrationSection';
import InputAlert from '../InputAlert';
import useInputWithAlert from '../../hooks/useInputWithAlert';
import { usePetRegistration } from '../../contexts/PetRegistrationContext';

function PetNameSection() {
  const {
    inputValue: name,
    isChanged: isNameChanged,
    handleChange: handleInputChange,
  } = useInputWithAlert();
  const { mandatoryData, setMandatoryData } = usePetRegistration();

  const handleNameChange = ({ target }) => {
    setMandatoryData({ ...mandatoryData, name: target.value });
  };

  return (
    <PetRegistrationSection title={TITLES.PET_NAME}>
      <div className="flex flex-col">
        <Input
          className="w-full h-[60px] text-caption"
          placeholder={INFO_MESSAGES.ENTER_NAME}
          value={name}
          onChange={handleInputChange}
          onBlur={handleNameChange}
        />
        <InputAlert
          message={INFO_MESSAGES.UNCHANGEABLE_NAME_NOTICE}
          isVisible={isNameChanged}
        />
      </div>
    </PetRegistrationSection>
  );
}

export default PetNameSection;
