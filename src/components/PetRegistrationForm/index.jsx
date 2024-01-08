import React from 'react';

import Button from '../Button';
import PetNameSection from './PetNameSection';
import DateOfDeathSection from './DateOfDeathSection';
import PetTypeSection from './PetTypeSection';
import RoleForPetSection from './RoleForPetSection';
import PetPersonalitiesSection from './PetPersonalitiesSection';
import PetImageSection from './PetImageSection';

function PetRegistrationForm({ isDisabled, handleSubmit }) {
  return (
    <div className="flex flex-col gap-y-6">
      <PetNameSection />
      <DateOfDeathSection />
      <PetTypeSection />
      <RoleForPetSection />
      <PetPersonalitiesSection />
      <PetImageSection />
      <section className="pt-6">
        <Button disabled={!isDisabled} onClick={handleSubmit}>
          <span>등록하기</span>
        </Button>
      </section>
    </div>
  );
}

export default PetRegistrationForm;
