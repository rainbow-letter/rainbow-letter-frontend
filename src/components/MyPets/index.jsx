import React from 'react';
import NoPets from './NoPets';

const existPets = false;

function MyPets() {
  if (!existPets) return <NoPets />;
  return <div className="w-full" />;
}

export default MyPets;
