import React from 'react';
import unChecked from '../../assets/unchecked_radio.svg';
import checked from '../../assets/check_radio.svg';

type Props = {
  children: React.ReactNode;
  selectRadio: string;
  onClick: (value: string) => void;
  value: string;
  name: string;
  defaultChecked?: boolean;
};

export default function Radio({
  children,
  selectRadio,
  onClick,
  value,
  name,
  defaultChecked,
}: Props) {
  return (
    <label className="flex">
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        onClick={() => onClick(value)}
        className="hidden"
      />
      <img
        src={selectRadio === value ? checked : unChecked}
        alt="버튼 이미지"
        className="mr-2.5 cursor-pointer"
      />
      <span className="cursor-pointer text-caption text-gray-3">
        {children}
      </span>
    </label>
  );
}
