import React from 'react';
import { Link } from 'react-router-dom';

import Woman from 'assets/im_donate_woman.svg';

export default function AppBar() {
  return (
    <Link to="/donate" target="_blank" className="bg-white pt-1">
      <div className="flex h-[73px] justify-between rounded-[15px] bg-orange-50 px-5">
        <section className="py-4 text-gray-1">
          <p className="font-bold">무지개편지를 도와주세요</p>
          <p className="text-caption-pc">지금 후원하러 가기</p>
        </section>
        <img src={Woman} alt="슬픈 여자 이미지" />
      </div>
    </Link>
  );
}
