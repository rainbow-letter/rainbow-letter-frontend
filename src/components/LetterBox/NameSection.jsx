import React from 'react';

import Chip from '../Chips/Chip';

export default function NameSection({
  petsNames,
  onClick,
  selectedPet,
  className,
}) {
  const style = className || '';
  return (
    <nav>
      <ul className={`${style} flex flex-wrap gap-3`}>
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
