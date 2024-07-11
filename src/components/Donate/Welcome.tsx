import React from 'react';
import Logo from 'assets/im_landing_logo.png';

export default function Welcome() {
  return (
    <header className="flex flex-col items-center justify-center pt-8">
      <img src={Logo} alt="로고 이미지" />
      <h1 className="text-heading-2 font-bold">무지개편지를 도와주세요!</h1>
    </header>
  );
}
