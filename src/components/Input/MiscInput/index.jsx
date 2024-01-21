/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';

const MiscInput = forwardRef(
  ({ isInvalid, value, onChange, ...props }, ref) => {
    const borderStyle = isInvalid ? 'border-alarm-red' : 'border-orange-400';

    return (
      <div
        className={`flex items-center h-10 w-60 bg-orange-50 px-4 border ${borderStyle} rounded-full`}
      >
        <div className="bg-transparent flex-shrink-0">
          <span className="bg-transparent text-solo-small font-bold text-orange-400">
            기타 :
          </span>
        </div>
        <input
          ref={ref}
          className="grow pl-2 bg-transparent text-caption text-gray-1 outline-none"
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
