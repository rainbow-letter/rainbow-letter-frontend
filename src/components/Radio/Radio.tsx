import unChecked from '../../assets/unchecked_radio.svg';
import checked from '../../assets/check_radio.svg';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
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
        className="hidden"
        defaultChecked={defaultChecked}
        name={name}
        onClick={() => onClick(value)}
        type="radio"
        value={value}
      />
      <img
        alt="버튼 이미지"
        className="mr-2.5 cursor-pointer"
        src={selectRadio === value ? checked : unChecked}
      />
      <span className="cursor-pointer text-caption text-gray-3">
        {children}
      </span>
    </label>
  );
}
