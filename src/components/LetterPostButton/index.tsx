import React from 'react';

import logo from 'assets/Logo_256px.png';
import { Link } from 'react-router-dom';

function LetterPostButton() {
  return (
    <section className="mx-5 pb-[1.875rem]">
      <Link
        style={{ boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.15)' }}
        className="w-full h-10 flex justify-center items-center gap-x-1 rounded-2xl"
        to="https://walla.my/survey/25UNmvnL7qWsW4pU2wRl"
        target="_blank"
      >
        <div className="h-[15px] w-[15px]">
          <img src={logo} alt="logo" width="100%" height="100%" />
        </div>
        <span className="text-solo-small">내 편지도 걸어보기</span>
      </Link>
    </section>
  );
}

export default LetterPostButton;
