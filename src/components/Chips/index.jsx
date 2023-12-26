import React from 'react';
import Chip from './Chip';

function Chips({ attributes, selectedChips, onChipSelect }) {
  return (
    <div className="flex flex-wrap gap-3 mb-3">
      {attributes.map((attribute) => (
        <Chip
          key={attribute.ID}
          value={attribute.NAME}
          isSelected={selectedChips?.includes(attribute.NAME)}
          onClick={() => onChipSelect(attribute.NAME)}
        />
      ))}
    </div>
  );
}

export default Chips;
