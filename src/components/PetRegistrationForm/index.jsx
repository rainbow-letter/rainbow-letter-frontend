/* eslint-disable import/no-cycle */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { generateFormData } from '../../utils/formData';
import { registerPet } from '../../api/pets';
import { updateImageAndGetId } from '../../api/images';
import { usePetRegistration } from '../../contexts/PetRegistrationContext';
import Button from '../Button';
import PetNameSection from './PetNameSection';
import DateOfDeathSection from './DateOfDeathSection';
import PetTypeSection from './PetTypeSection';
import RoleForPetSection from './RoleForPetSection';
import PetPersonalitiesSection from './PetPersonalitiesSection';
import PetImageSection from './PetImageSection';

function PetRegistrationForm() {
  const { mandatoryData, optionalData } = usePetRegistration();
  const navigate = useNavigate();

  const isAllMandatoryDataFilled = Object.values(mandatoryData).every((value) =>
    Boolean(value)
  );

  const formatDeathAnniversary = ({ year, month, day }) => {
    return `${year}-${month}-${day}`;
  };

  const uploadImage = async (image) => {
    const imageFormData = generateFormData(image);
    const response = await updateImageAndGetId(imageFormData);
    return response.id;
  };

  const registerPetData = async (imageId) => {
    const formattedDeathAnniversary = formatDeathAnniversary(
      mandatoryData.deathAnniversary
    );
    const dataToSubmit = {
      ...mandatoryData,
      ...optionalData,
      image: imageId,
      deathAnniversary: formattedDeathAnniversary,
    };
    return registerPet(dataToSubmit);
  };

  const handleSubmit = async () => {
    try {
      const imageId = await uploadImage(mandatoryData.image);
      await registerPetData(imageId);
      navigate(-1);
    } catch (error) {
      // TODO: handle error
    }
  };

  return (
    <div className="flex flex-col gap-y-6">
      <PetNameSection />
      <DateOfDeathSection />
      <PetTypeSection />
      <RoleForPetSection />
      <PetPersonalitiesSection />
      <PetImageSection />
      <section className="pt-12">
        <Button
          disabled={!isAllMandatoryDataFilled}
          value="등록하기"
          onClick={handleSubmit}
        />
      </section>
    </div>
  );
}

export default PetRegistrationForm;
