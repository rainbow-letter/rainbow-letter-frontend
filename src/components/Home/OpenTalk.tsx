import React from 'react';
import { Link } from 'react-router-dom';

import { OPEN_TALK_MESSAGE } from 'components/Home/constants';
import kakaoLogo from 'assets/kakao-logo.svg';

export default function OpenTalk() {
  return (
    <section className="h-[3.125rem] px-7 mt-9 mb-2.5 gap-2.5">
      <Link
        to="https://open.kakao.com/o/s5yBU55f"
        target="_blank"
        className="w-full h-full flex justify-center items-center gap-x-2.5 bg-orange-50 text-solo-label text-orange-400 font-semibold rounded-2xl"
      >
        <div className="w-6 h-6">
          <img src={kakaoLogo} alt="kakao" width="100%" height="100%" />
        </div>
        <p className="font-bold">{OPEN_TALK_MESSAGE}</p>
      </Link>
    </section>
  );
}
