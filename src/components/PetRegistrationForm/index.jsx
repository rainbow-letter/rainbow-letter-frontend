import React from 'react';

import Button from '../Button';
import PetNameSection from './PetNameSection';
import DateOfDeathSection from './DateOfDeathSection';
import PetTypeSection from './PetTypeSection';
import RoleForPetSection from './RoleForPetSection';
import PetPersonalitiesSection from './PetPersonalitiesSection';
import PetImageSection from './PetImageSection';

function PetRegistrationForm() {
  return (
    <div className="flex flex-col gap-y-6 mt-3">
      <PetNameSection />
      <DateOfDeathSection />
      <PetTypeSection />
      <RoleForPetSection />
      <PetPersonalitiesSection />
      <PetImageSection />
      <section className="pt-12">
        <Button
          value="등록하기"
          onClick={() => {
            // TODO
          }}
        />
      </section>
    </div>
  );
}

export default PetRegistrationForm;
