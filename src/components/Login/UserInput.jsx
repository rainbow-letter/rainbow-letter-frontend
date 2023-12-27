/* eslint-disable*/
import React from 'react';

const INPUT_STYLE =
  'w-full rounded-[15px] py-[23px] pl-[19px] bg-gray-2 text-solo-small mb-2.5 outline-none';
const ERROR_MESSAGE_STYLE =
  'text-solo-small text-left text-alarm-red mb-[13px] px-[10px] h-[34px]'; // 높이를 고정

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
      <p className={ERROR_MESSAGE_STYLE}>
        {isNotValid && errorMessage ? errorMessage : ' '}
      </p>
    </>
  );
}
