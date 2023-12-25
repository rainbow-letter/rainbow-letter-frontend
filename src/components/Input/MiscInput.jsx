import React from 'react';

function MiscInput({ value, onChange }) {
  return (
    <div className="flex w-60 bg-orange-50 px-4 py-3 border border-orange-400 rounded-full">
      <div className="bg-transparent">
        <span className="bg-transparent text-solo-small font-bold text-orange-400">
          기타 :
        </span>
      </div>
      <input
        className="pl-2 bg-transparent outline-none"
        maxLength={10}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default MiscInput;
