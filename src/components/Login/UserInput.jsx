/* eslint-disable*/
import React from 'react';

const INPUT_STYLE =
  'w-full rounded-[15px] p-5 bg-gray-2 text-caption mb-2.5 outline-none';
const ERROR_MESSAGE_STYLE =
  'text-caption text-left text-alarm-red px-2.5 pb-2.5';

export default function UserInput({
  isNotValid,
  errorMessage,
  className,
  ...props
}) {
  return (
    <>
      <input
        {...props}
        className={`${className} ${
          isNotValid
            ? `${INPUT_STYLE} border border-alarm-red`
            : `${INPUT_STYLE}`
        }`}
      />
      {isNotValid && errorMessage && (
        <p className={ERROR_MESSAGE_STYLE}>{errorMessage}</p>
      )}
    </>
  );
}
