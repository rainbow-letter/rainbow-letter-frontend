import React, { useState } from 'react';

function Chip({ className, value, onClick }) {
  const [isSelect, setIsSelect] = useState(false);
  const styles = className || '';

  const handleClick = () => {
    setIsSelect((prvState) => !prvState);
    onClick();
  };

  return (
    <button
      className={`${styles} flex justify-center items-center py-[13px] px-4 border rounded-full
      ${isSelect ? 'bg-orange-50 border-orange-400' : 'border-gray-1'}`}
      type="button"
      onClick={handleClick}
    >
      <span
        className={`text-sm leading-[14px] ${
          isSelect ? 'text-orange-400 font-bold' : 'text-gray-1'
        }`}
      >
        {value}
      </span>
    </button>
  );
}

export default Chip;
