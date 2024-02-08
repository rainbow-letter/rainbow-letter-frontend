import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Chip from 'components/Chips/Chip';
import NoPets from 'components/MyPets/NoPets';
import { getPets } from 'api/pets';
import { Pets } from 'types/pets';

const DEFAULT = '전체';

type Props = {
  onChange: (name: string) => void;
  selectedPet: '전체' | string;
};

export default function NameSection({ onChange, selectedPet }: Props) {
  const [petsList, setPetsList] = useState<string[]>([]);
  const { state } = useLocation();

  useEffect(() => {
    (async () => {
      const { pets } = await getPets();
      const petsNames = pets.map((pet: Pets) => pet.name);

      setPetsList((pets.length > 0 && [DEFAULT, ...petsNames]) || []);

      if (state) {
        const findedPet = pets.find((pet: Pets) => pet.id === state);
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
