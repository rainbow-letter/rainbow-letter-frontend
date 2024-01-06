/* eslint-disable import/no-cycle */
import React, { useEffect } from 'react';

import PetRegistrationForm from '../PetRegistrationForm';

function PetEdit() {
  useEffect(() => {
    document.title = 'Editar pet';
  }, []);

  return <PetRegistrationForm />;
}

export default PetEdit;
