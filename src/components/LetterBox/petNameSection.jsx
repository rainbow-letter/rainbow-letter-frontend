import React from 'react';

import Chip from '../Chips/Chip';

export default function PetNameSection({ petsNames, onClick, selectedPet }) {
  return (
    <nav>
      <ul className="flex flex-wrap gap-3">
        {petsNames &&
          petsNames.map((name) => (
            <Chip
              key={name}
              value={name}
              isSelected={name === selectedPet}
              onClick={() => onClick(name)}
            />
          ))}
      </ul>
    </nav>
  );
}
