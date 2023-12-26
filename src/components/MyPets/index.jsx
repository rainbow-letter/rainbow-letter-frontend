import React from 'react';
import NoPets from './NoPets';
import PetRegistrationForm from '../PetRegistrationForm';

const existPets = true;

function MyPets() {
  if (!existPets) return <NoPets />;
  return (
    <div className="w-full">
      <PetRegistrationForm />
    </div>
  );
}

export default MyPets;
