import React from 'react';
import { Link } from 'react-router-dom';

import banner from '../../assets/banner.png';
import { BANNER_MESSAGE } from './constants';

export default function Banner() {
  return (
    <section className="px-[25px] mt-[30px]">
      <Link
        to="https://blog.naver.com/rainbowletter/223338521441"
        target="_blank"
        className="flex justify-center items-center gap-6 bg-orange-50 rounded-[15px] shadow-home pt-3 pb-2"
      >
        <div className="flex flex-col justify-center gap-1">
          <p className="text-solo-label-pc font-bold text-black">
            {BANNER_MESSAGE.title}
          </p>
          <p className="text-caption text-gray-1">
            {BANNER_MESSAGE.description}
          </p>
        </div>
        <img src={banner} alt="banner" className="text-right" />
      </Link>
    </section>
  );
}
