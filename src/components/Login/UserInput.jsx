/* eslint-disable*/
import React from 'react';

const INPUT_STYLE =
  'w-full rounded-[15px] py-[21.5px] pl-[21.25px] bg-gray-2 text-solo-small mb-2.5';

export default function UserInput({ isNotValid, errorMessage, ...props }) {
  return (
    <>
      <input
        {...props}
        className={
          isNotValid
            ? `${INPUT_STYLE} border border-alarm-red`
            : `${INPUT_STYLE}`
        }
      />
      {isNotValid && errorMessage && (
        <p className="text-solo-small text-left mb-3.5 text-alarm-red">
          {errorMessage}
        </p>
      )}
    </>
  );
}
