import React from 'react';

import Chip from 'components/Chips/Chip';
import { ChipValue } from 'components/Chips/constants';

type Props = {
  attributes: ChipValue[];
  selectedChips: string[];
  onChipSelect: (name: string) => void;
};

function Chips({ attributes, selectedChips, onChipSelect }: Props) {
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
