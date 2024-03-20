import React from 'react';

import rainbow from 'assets/rainbow_28*39.svg';
import { Link } from 'react-router-dom';

function PWAGuide() {
  return (
    <section>
      <Link
        className="w-full flex justify-center items-center gap-x-1 py-1.5 bg-gray-2"
        to="https://blog.naver.com/rainbowletter/223383201675"
        target="_blank"
      >
        <div>
          <img src={rainbow} alt="logo" />
        </div>
        <div>
          <p className="text-solo-small font-normal">
            무지개편지를 앱처럼 사용해보세요!
          </p>
        </div>
      </Link>
    </section>
  );
}

export default PWAGuide;
