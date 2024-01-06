import React from 'react';

import PetCard from './PetCard';
import NoPets from './NoPets';

const existPets = true;

function MyPets() {
  if (!existPets) return <NoPets />;
  return (
    <div className="w-full">
      <PetCard />
    </div>
  );
}

export default MyPets;
