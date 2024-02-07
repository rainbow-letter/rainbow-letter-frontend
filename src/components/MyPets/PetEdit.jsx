import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { getPet } from 'api/pets';
import { usePetRegistration } from '../../contexts/PetRegistrationContext';
import usePetForm from '../../hooks/usePetForm';
import PetRegistrationForm from '../PetRegistrationForm';

function PetEdit() {
  const navigate = useNavigate();
  const location = useLocation();
  const petId = location.state;
  const { mandatoryData, optionalData } = usePetRegistration();
  const [pet, setPet] = useState(null);

  const fetchPet = async () => {
    const response = await getPet(petId);
    setPet(response);
  };

  const onSuccess = () => {
    navigate(-1);
  };

  const onError = () => {
    // TODO: 에러 처리
  };

  const { isAllMandatoryDataFilled, handleSubmit } = usePetForm(
    mandatoryData,
    onSuccess,
    onError,
    petId
  );

  useEffect(() => {
    fetchPet();
  }, []);

  return (
    <PetRegistrationForm
      petData={pet}
      isDisabled={isAllMandatoryDataFilled}
      handleSubmit={() => handleSubmit(mandatoryData, optionalData)}
    />
  );
}

export default PetEdit;
