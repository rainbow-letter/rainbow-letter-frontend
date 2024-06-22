/* eslint-disable  */
import React from 'react';

import check from '../../../assets/humbleicons_check.svg';

type Props = {
  id: string;
  label: string;
  onChange: (e: any, name: string) => void;
  checked: boolean;
};

export default function CheckBox({ id, label, onChange, checked }: Props) {
  return (
    <>
      <div className="flex">
        <input
          type="checkbox"
          id={id}
          onChange={(e) => onChange(e, label)}
          checked={checked}
          className="h-5 w-5 cursor-pointer appearance-none rounded border border-orange-400 bg-white checked:bg-orange-400"
        />
        <img
          src={check}
          alt="check"
          onClick={(e) => onChange(e, label)}
          className={`${
            checked ? 'block' : 'hidden'
          } absolute h-5 w-5 cursor-pointer`}
        />
      </div>
      <label htmlFor={id} className="w-full cursor-pointer font-medium">
        {label}
      </label>
    </>
  );
}
