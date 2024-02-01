import React from 'react';

import Chip from '../Chips/Chip';

export default function NameSection({ petsNames, onClick, selectedPet }) {
  return (
    <nav>
      <ul className="flex flex-wrap gap-2">
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
