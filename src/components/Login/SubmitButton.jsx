/* eslint-disable */
import React from 'react';

export default function SubmitButton({ onclick, value, ...props }) {
  return (
    <button {...props} type="submit" onClick={(e) => onclick(e)}>
      {value}
    </button>
  );
}
