import React from 'react';

type Props = {
  value: string;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
};

function Chip({ className, isSelected, value, onClick }: Props) {
  const styles = className || '';

  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <button
      className={`${styles} flex justify-center items-center py-[12px] px-4 border rounded-full
      ${isSelected ? 'bg-orange-50 border-orange-400' : 'border-gray-1'}`}
      type="button"
      onClick={handleClick}
    >
      <span
        className={`text-sm leading-[14px] ${
          isSelected ? 'text-orange-400 font-bold' : 'text-gray-1'
        }`}
      >
        {value}
      </span>
    </button>
  );
}

export default Chip;
