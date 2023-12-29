/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

function MiscInput({ value, onChange, ...props }) {
  return (
    <div className="flex items-center h-10 w-60 bg-orange-50 px-4 border border-orange-400 rounded-full">
      <div className="bg-transparent">
        <span className="bg-transparent text-solo-small font-bold text-orange-400">
          기타 :
        </span>
      </div>
      <input
        className="pl-2 bg-transparent text-caption text-gray-1 outline-none"
        maxLength={10}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

export default MiscInput;
