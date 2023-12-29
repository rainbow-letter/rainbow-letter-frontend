import React from 'react';

function InputAlert({ message, isVisible, reserveSpace = false }) {
  if (!isVisible) {
    return null;
  }

  const styles = reserveSpace ? 'h-10' : '';

  return (
    <div className={`${styles} px-2.5 pt-2.5 text-alarm-red text-caption`}>
      {message}
    </div>
  );
}

export default InputAlert;
