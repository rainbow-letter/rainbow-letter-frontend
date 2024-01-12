/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { getPet } from '../../api/pets';
import PetRegistrationForm from '../PetRegistrationForm';

function PetEdit() {
  const location = useLocation();
  const petId = location.state;
  const [pet, setPet] = useState(null);

  const fetchPet = async () => {
    const response = await getPet(petId);
    setPet(response);
  };

  useEffect(() => {
    fetchPet();
  }, []);

  return <PetRegistrationForm petData={pet} />;
}

export default PetEdit;
