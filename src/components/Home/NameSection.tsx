import Chip from 'components/Chips/Chip';

type Props = {
  petsNames: string[];
  onClick: (name: string) => void;
  selectedPet: string | null;
};

export default function NameSection({
  petsNames,
  onClick,
  selectedPet,
}: Props) {
  return (
    <nav>
      <ul className="flex flex-wrap gap-2">
        {petsNames &&
          petsNames.map((name) => (
            <Chip
              key={name}
              isSelected={name === selectedPet}
              onClick={() => onClick(name)}
              value={name}
            />
          ))}
      </ul>
    </nav>
  );
}
