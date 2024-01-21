import React from 'react';

import check from '../../../assets/humbleicons_check.svg';

export default function CheckBox({ id, label, onChange, checked }) {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        onChange={(e) => onChange(e, label)}
        checked={checked}
        className="appearance-none w-5 h-5 border border-orange-400 bg-white rounded-[5px] cursor-pointer checked:bg-orange-400"
      />
      <img src={check} alt="check" className="absolute w-5 h-5" />
      <label htmlFor={id} className="font-medium cursor-pointer">
        {label}
      </label>
    </>
  );
}
