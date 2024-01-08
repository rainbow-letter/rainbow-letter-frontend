/* eslint-disable import/no-cycle */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PetRegistrationForm from '../PetRegistrationForm';

function PetEdit() {
  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    console.log(id);
  }, []);

  return <PetRegistrationForm />;
}

export default PetEdit;
