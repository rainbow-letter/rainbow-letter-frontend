import React from 'react';
import { Link } from 'react-router-dom';

import kakaoLogo from 'assets/kakao-logo.svg';

export default function Contact() {
  return (
    <section className="mb-2.5 mt-9 h-[3.125rem] px-4">
      <div className="border-b border-gray-1" />
      <Link
        to="http://pf.kakao.com/_MNevG"
        target="_blank"
        className="mt-9 flex size-full items-center justify-center gap-x-2.5 rounded-2xl bg-white text-solo-label font-semibold text-orange-400"
      >
        <div className="size-6">
          <img src={kakaoLogo} alt="kakao" width="100%" height="100%" />
        </div>
        <p className="text-caption font-bold">카카오톡 후원 문의하기</p>
      </Link>
      <p className="mt-4 text-center text-caption-pc text-gray-1">
        *현금 영수증 발행은 카카오톡으로 문의 부탁드립니다.
      </p>
    </section>
  );
}
