/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

function Input({ className, ...props }) {
  const styles = className || '';

  return (
    <input
      className={`${styles} px-5 py-6 bg-gray-2 text-solo-caption rounded-2xl outline-none`}
      {...props}
    />
  );
}

export default Input;
