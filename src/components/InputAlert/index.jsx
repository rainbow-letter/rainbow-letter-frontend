import React from 'react';

function InputAlert({ message, isVisible, isFixed }) {
  if (!isVisible) {
    return null;
  }

  const styles = isFixed ? 'h-10' : '';

  return (
    <div className={`${styles} px-2.5 pt-2.5 text-alarm-red text-caption`}>
      {message}
    </div>
  );
}

export default InputAlert;
