/* eslint-disable no-shadow */

import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getPets } from 'api/pets';
import PetCard from './PetCard';
import NoPets from './NoPets';

export default function FetchPets() {
  const { state } = useLocation();
  const ref = useRef([]);
  const [pets, setPets] = useState(null);

  const handleGetPets = async () => {
    const response = await getPets();
    setPets(response.pets || []);
  };

  useEffect(() => {
    handleGetPets();
  }, []);

  useEffect(() => {
    if (state) {
      ref.current[state]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [pets]);

  if (pets !== null && pets.length < 1) return <NoPets />;
  return (
    <div className="h-full">
      <ul className="px-1">
        {pets &&
          pets.map((pet) => (
            <PetCard
              key={pet.id}
              pet={pet}
              ref={(el) => {
                ref.current[pet.id] = el;
              }}
            />
          ))}
      </ul>
    </div>
  );
}
