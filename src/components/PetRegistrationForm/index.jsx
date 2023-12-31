/* eslint-disable import/no-cycle */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { registerPet } from '../../api/pets';
import {
  usePetRegistration,
  PetRegistrationProvider,
} from '../../contexts/PetRegistrationContext';
import Button from '../Button';
import PetNameSection from './PetNameSection';
import DateOfDeathSection from './DateOfDeathSection';
import PetTypeSection from './PetTypeSection';
import RoleForPetSection from './RoleForPetSection';
import PetPersonalitiesSection from './PetPersonalitiesSection';
import PetImageSection from './PetImageSection';

function PetRegistrationForm() {
  const { formData } = usePetRegistration();
  const navigate = useNavigate();

  // TODO: 이미지 아이디 먼저 받아온 후 아래 로직 실행
  const handlePetRegistration = async () => {
    try {
      await registerPet(formData);
      navigate(-1);
    } catch (error) {
      // TODO: handle error
    }
  };

  return (
    <PetRegistrationProvider>
      <div className="flex flex-col gap-y-6">
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
              handlePetRegistration();
            }}
          />
        </section>
      </div>
    </PetRegistrationProvider>
  );
}

export default PetRegistrationForm;
