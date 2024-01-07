import React from 'react';

import Chip from '../Chips/Chip';

export default function petNameSection({ petsNames, onClick, selectedPet }) {
  return (
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
  );
}
