/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

type Props = {
  className: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ className, ...props }: Props) {
  const styles = className || '';

  return (
    <input
      className={`${styles} text-solo-caption rounded-2xl bg-gray-2 px-5 py-6`}
      {...props}
    />
  );
}

export default Input;
