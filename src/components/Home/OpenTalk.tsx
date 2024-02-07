import React from 'react';
import { Link } from 'react-router-dom';

import { OPEN_TALK_MESSAGE } from 'components/Home/constants';
import kakao from '../../assets/Talk.svg';
import background from '../../assets/Talk_Background.svg';

export default function OpenTalk() {
  return (
    <section className="px-[25px] mt-[23px] mb-[11px] gap-[10px] relative">
      <Link
        to="https://open.kakao.com/o/s5yBU55f"
        target="_blank"
        className="w-full py-4 flex justify-center gap-2.5 bg-orange-50 text-solo-label text-orange-400 font-semibold rounded-[15px]"
      >
        <div className="mr-[10px]">
          <img
            src={background}
            alt="background"
            className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <img
            src={kakao}
            alt="kakao"
            className="absolute z-10 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <p>{OPEN_TALK_MESSAGE}</p>
      </Link>
    </section>
  );
}
