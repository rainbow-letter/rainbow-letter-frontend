/* eslint-disable import/no-cycle */
import React from 'react';

import { PetRegistrationProvider } from '../../contexts/PetRegistrationContext';
import PetRegistrationForm from '../PetRegistrationForm';

function PetRegistration() {
  return (
    <PetRegistrationProvider>
      <PetRegistrationForm />
    </PetRegistrationProvider>
  );
}

export default PetRegistration;
