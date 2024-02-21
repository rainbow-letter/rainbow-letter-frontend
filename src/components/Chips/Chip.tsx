import React from 'react';

type Props = {
  value: string;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
};

function Chip({ className, isSelected, value, onClick }: Props) {
  const styles = className || '';

  return (
    <button
      className={`${styles} flex justify-center items-center py-3 px-4 border rounded-full
      ${isSelected ? 'bg-orange-50 border-orange-400' : 'border-gray-1'}`}
      type="button"
      onClick={onClick}
    >
      <span
        className={`text-sm leading-[0.875rem] ${
          isSelected ? 'text-orange-400 font-bold' : 'text-gray-1'
        }`}
      >
        {value}
      </span>
    </button>
  );
}

export default Chip;
