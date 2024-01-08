/* eslint-disable import/no-cycle */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { usePetRegistration } from '../../contexts/PetRegistrationContext';
import PetRegistrationForm from '../PetRegistrationForm';
import usePetRegistrationForm from '../../hooks/usePetRegistrationForm';

function PetRegistration() {
  const { mandatoryData, optionalData } = usePetRegistration();
  const navigate = useNavigate();

  const onSuccess = () => {
    navigate(-1);
  };

  const onError = () => {
    // TODO: 에러 처리
  };

  const { isAllMandatoryDataFilled, handleSubmit } = usePetRegistrationForm(
    mandatoryData,
    onSuccess,
    onError
  );

  return (
    <PetRegistrationForm
      isDisabled={isAllMandatoryDataFilled}
      handleSubmit={() => handleSubmit(mandatoryData, optionalData)}
    />
  );
}

export default PetRegistration;
