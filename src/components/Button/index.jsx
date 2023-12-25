import React from 'react';

function Button({ className, value, onClick }) {
  const styles = className || '';

  return (
    <button
      className={`${styles} w-full h-[70px] bg-orange-400 text-heading-3 font-semibold text-white rounded-2xl`}
      type="button"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Button;
