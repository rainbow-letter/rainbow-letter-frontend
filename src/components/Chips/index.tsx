import Chip from 'components/Chips/Chip';
import { ChipValue } from 'components/Chips/constants';

type Props = {
  attributes: ChipValue[];
  selectedChips: string[];
  onChipSelect: (name: string) => void;
};

function Chips({ attributes, selectedChips, onChipSelect }: Props) {
  return (
    <div className="mb-3 flex flex-wrap gap-3">
      {attributes.map((attribute) => (
        <Chip
          key={attribute.ID}
          isSelected={selectedChips?.includes(attribute.NAME)}
          onClick={() => onChipSelect(attribute.NAME)}
          value={attribute.NAME}
        />
      ))}
    </div>
  );
}

export default Chips;
