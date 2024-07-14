import React from 'react';

type Props = {
  value: string;
  bgColor: string;
};

// #FFF1D4, #FFF8ED, #FFF1D4

export default function TagItem({ value, bgColor }: Props) {
  const tag = `#${value}`;

  return (
    <li
      className={`${bgColor} rounded-[8px] p-2 text-caption leading-[14px] text-orange-400`}
    >
      {tag}
    </li>
  );
}
