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
          className="appearance-none w-5 h-5 border border-orange-400 bg-white rounded-[5px] cursor-pointer checked:bg-orange-400"
        />
        <img
          src={check}
          alt="check"
          onClick={(e) => onChange(e, label)}
          className={`${
            checked ? 'block' : 'hidden'
          } absolute w-5 h-5 cursor-pointer`}
        />
      </div>
      <label htmlFor={id} className="font-medium cursor-pointer w-full">
        {label}
      </label>
    </>
  );
}
