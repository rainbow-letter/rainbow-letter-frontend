import React from 'react';
import { Link } from 'react-router-dom';

import { BANNER_MESSAGE } from 'components/Home/constants';
import banner from '../../assets/banner.jpg';

export default function Banner() {
  return (
    <section>
      <Link
        to="https://smore.im/quiz/IEiAubtaOQ"
        target="_blank"
        id="ads_consult1"
        className="flex justify-between bg-[#FFF1EB] rounded-2xl shadow-home px-5 py-[0.625rem]"
      >
        <div className="flex flex-col justify-center">
          <p className="font-bold text-black">{BANNER_MESSAGE.title}</p>
          <p className="text-caption text-gray-1">
            {BANNER_MESSAGE.description}
          </p>
        </div>
        <img src={banner} alt="banner" className="rounded-[15px]" />
      </Link>
    </section>
  );
}
