import React from 'react';

function InputAlert({ message, isVisible }) {
  return (
    <div className="h-10 p-2.5 text-alarm-red text-caption">
      {isVisible ? message : ''}
    </div>
  );
}

export default InputAlert;
