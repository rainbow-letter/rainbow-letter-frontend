import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Button from '../Button';
import PetNameSection from './PetNameSection';
import DateOfDeathSection from './DateOfDeathSection';
import PetTypeSection from './PetTypeSection';
import RoleForPetSection from './RoleForPetSection';
import PetPersonalitiesSection from './PetPersonalitiesSection';
import PetImageSection from './PetImageSection';
import {
  usePetRegistration,
  setInitialPetData,
} from '../../contexts/PetRegistrationContext';
import { convertDateStringToObject } from '../../utils/date';
import usePreventDoubleClick from '../../hooks/usePreventDoubleClick';

function PetRegistrationForm({ petData, isDisabled, handleSubmit }) {
  const { pathname } = useLocation();
  const { setMandatoryData, setOptionalData } = usePetRegistration();
  const isEdit = pathname.includes('edit');
  const { isSubmitting, handleButtonClick } = usePreventDoubleClick();

  const setPetData = () => {
    if (petData) {
      const { name, species, owner, deathAnniversary, image, personalities } =
        petData;

      setMandatoryData({
        name,
        species,
        owner,
        deathAnniversary:
          deathAnniversary && convertDateStringToObject(deathAnniversary),
        image,
      });
      setOptionalData({
        personalities,
      });
    }
  };

  useEffect(() => {
    setPetData();
    return () => {
      setInitialPetData(setMandatoryData, setOptionalData);
    };
  }, [petData]);

  return (
    <div className="flex flex-col gap-y-6 px-2">
      <PetNameSection isEdit={isEdit} />
      <DateOfDeathSection />
      <PetTypeSection />
      <RoleForPetSection />
      <PetPersonalitiesSection />
      <PetImageSection />
      <section className="pt-6">
        <Button
          disabled={!isDisabled || isSubmitting}
          onClick={handleButtonClick(handleSubmit)}
        >
          <span>등록하기</span>
        </Button>
      </section>
    </div>
  );
}

export default PetRegistrationForm;
