/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Chip from '../Chips/Chip';
import { getPets } from '../../api/pets';
import NoPets from '../MyPets/NoPets';

const DEFAULT = '전체';

export default function NameSection({ onChange, selectedPet }) {
  const [petsList, setPetsList] = useState(null);
  const { state } = useLocation();

  useEffect(() => {
    (async () => {
      const { pets } = await getPets();
      const petsNames = pets.map((pet) => pet.name);

      setPetsList((pets.length > 0 && [DEFAULT, ...petsNames]) || []);

      if (state) {
        const findedPet = pets.find((pet) => pet.id === state);
        onChange(findedPet.name || DEFAULT);
      }
    })();
  }, []);

  if (petsList !== null && petsList.length < 1) return <NoPets />;
  return (
    <nav>
      <ul className="flex flex-wrap gap-2">
        {petsList &&
          petsList.map((name) => (
            <Chip
              key={name}
              value={name}
              isSelected={name === selectedPet}
              onClick={() => onChange(name)}
            />
          ))}
      </ul>
    </nav>
  );
}
