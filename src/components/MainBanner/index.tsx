import React from 'react';
import { Link } from 'react-router-dom';

import chevronRightWithe from 'assets/chvron-right_white.svg';

type BannerProps = {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
  bgColor: string;
  buttonContent: string;
};

export default function Banner({
  id,
  title,
  description,
  link,
  image,
  bgColor,
  buttonContent,
}: BannerProps) {
  return (
    <Link
      to={link}
      target="_blank"
      className={`${bgColor} w-full h-[268px] flex justify-between pl-[30px] pr-5 pt-[46px] pb-16`}
    >
      <div className="flex flex-col justify-between py-2.5 text-left">
        <div>
          <p
            className={`${id === 0 ? 'text-base leading-5' : 'text-heading-3'} font-bold whitespace-pre-wrap`}
          >
            {title}
          </p>
          <p
            className={`${id === 0 ? ' my-2.5' : ''} text-sm font-light whitespace-pre-wrap`}
          >
            {description}
          </p>
        </div>
        <div className="flex">
          <div className="flex items-center justify-between gap-x-1 px-2.5 py-[5px] bg-orange-400 text-solo-small text-white rounded-full">
            <p>{buttonContent}</p>
            <img src={chevronRightWithe} alt="arrow" />
          </div>
        </div>
      </div>
      <div className="w-[9.875rem] h-[9.875rem] flex justify-center items-center">
        <img
          className="rounded-2xl w-full h-full object-cover"
          src={image}
          alt="card"
        />
      </div>
    </Link>
  );
}
