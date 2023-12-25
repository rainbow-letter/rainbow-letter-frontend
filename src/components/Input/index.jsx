import React from 'react';

function Input({ className, placeholder, value, onChange }) {
  const styles = className || '';

  return (
    <input
      className={`${styles} px-5 py-6 bg-gray-2 text-solo-caption rounded-2xl outline-none`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
