/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const INPUT_STYLE =
  'w-full rounded-[15px] py-[18px] px-5 bg-gray-2 text-solo-small mb-3 outline-none';

type Props = {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  isNotValid: boolean | null | undefined;
  errorMessage: string | null | undefined;
  className?: string;
};

export default function UserInput({
  isNotValid,
  errorMessage,
  className,
  ...props
}: Props) {
  const style = className || '';

  return (
    <>
      <input
        {...props}
        className={`${style} ${
          isNotValid
            ? `${INPUT_STYLE} border border-alarm-red`
            : `${INPUT_STYLE}`
        }`}
      />
      {isNotValid && errorMessage && (
        <p className="text-caption text-left text-alarm-red px-2.5 pb-2.5">
          {errorMessage}
        </p>
      )}
    </>
  );
}
