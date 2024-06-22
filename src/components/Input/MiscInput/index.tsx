/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';

type Props = {
  isInvalid: boolean;
  value: string;
  onChange: () => void;
};

const MiscInput = forwardRef(
  (
    { isInvalid, value, onChange, ...props }: Props,
    ref: React.ForwardedRef<HTMLInputElement> | undefined
  ) => {
    const borderStyle = isInvalid ? 'border-alarm-red' : 'border-orange-400';

    return (
      <div
        className={`flex h-10 w-60 items-center border bg-orange-50 px-4 ${borderStyle} rounded-full`}
      >
        <div className="shrink-0 bg-transparent">
          <span className="bg-transparent text-solo-small font-bold text-orange-400">
            기타 :
          </span>
        </div>
        <input
          ref={ref}
          className="grow bg-transparent pl-2 text-caption text-gray-1"
          maxLength={10}
          value={value}
          onChange={onChange}
          {...props}
        />
      </div>
    );
  }
);

export default MiscInput;
