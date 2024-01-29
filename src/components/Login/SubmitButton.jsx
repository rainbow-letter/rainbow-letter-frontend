/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

export default function SubmitButton({ onclick, value, disabled, ...props }) {
  return (
    <button
      {...props}
      disabled={disabled}
      type="submit"
      onClick={(e) => onclick(e)}
    >
      {value}
    </button>
  );
}
