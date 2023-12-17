/* eslint-disable*/
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import LOGIN_MESSAGE from '../components/Login/constants';
import googleIcon from '../assets/Google Icon.svg';

const INPUT_STYLE =
  'w-full rounded-[15px] py-[21.5px] pl-[21.25px] bg-gray-2 text-gray-2 text-solo-small mb-2.5';
const BUTTON_STYLE =
  'w-full rounded-full flex justify-center items-center py-[22px]';

export default function Login() {
  const location = useLocation();
  const message = LOGIN_MESSAGE.find(
    (item) => item.pathname === location.pathname
  );

  return (
    <main className="text-center mt-36">
      <section>
        <h2 className="text-heading-2">{message.title}</h2>
        <button
          type="button"
          className={`${BUTTON_STYLE} border text-solo-medium text-gray-1 mt-5 gap-2`}
        >
          <img src={googleIcon} alt="google icon" />
          {message.button.google}
        </button>
        <div className="border-t my-6 w-[57px] mx-auto" />
      </section>
      <div>
        <h3 className="text-solo-small text-gray-1">{message.describe}</h3>
        <form className="my-5">
          <input
            type="text"
            placeholder="이메일을 입력해주세요"
            className={`${INPUT_STYLE} mb`}
          />
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            className={INPUT_STYLE}
          />
          <button
            type="submit"
            className={`${BUTTON_STYLE} bg-orange-400 text-heading-3 text-white mt-0.5`}
          >
            {message.button.default}
          </button>
        </form>
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
      </div>
    </main>
  );
}
