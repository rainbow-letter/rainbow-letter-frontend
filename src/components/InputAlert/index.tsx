import React from 'react';

type Props = {
  message: string;
  isVisible: boolean;
  reserveSpace: boolean;
};

function InputAlert({ message, isVisible, reserveSpace = false }: Props) {
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
