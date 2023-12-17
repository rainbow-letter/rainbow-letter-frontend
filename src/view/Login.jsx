/* eslint-disable*/
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Header from '../components/Login/Header';
import LoginForm from '../components/Login/LoginForm';
import LOGIN_MESSAGE from '../components/Login/constants';

const BUTTON_STYLE =
  'w-full rounded-full flex justify-center items-center py-[22px]';

export default function Login() {
  const location = useLocation();
  const message = LOGIN_MESSAGE.find(
    (item) => item.pathname === location.pathname
  );

  return (
    <main className="text-center mt-36">
      <Header message={message} BUTTON_STYLE={BUTTON_STYLE} />
      <LoginForm message={message} BUTTON_STYLE={BUTTON_STYLE} />
      {/* 추후 다른 페이지 주소 작성 */}
      <Link to="/">
        <span className="text-caption text-gray-2 text-solo-medium">
          비밀번호를 잊었어요
        </span>
      </Link>
      <section className="flex justify-center mt-[60px] gap-2.5">
        <h3>{message.question}</h3>
        {/* 추후 회원가입 페이지 주소 작성 */}
        <Link to="/">
          <span className="underline text-orange-400">무료 회원가입하기</span>
        </Link>
      </section>
    </main>
  );
}
