/* eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';

import googleIcon from '../assets/Google Icon.svg';

const INPUT_STYLE =
  'w-full rounded-[15px] py-[21.5px] pl-[21.25px] bg-gray-2 text-gray-2 text-solo-small mb-2.5';
const BUTTON_STYLE =
  'w-full rounded-full flex justify-center items-center py-[22px]';

export default function Login() {
  return (
    <main className="text-center mt-36">
      <section>
        <h2 className="text-heading-2">다시 와주셨네요!</h2>
        <button
          type="button"
          className={`${BUTTON_STYLE} border text-solo-medium text-gray-1 mt-5 gap-2`}
        >
          <img src={googleIcon} alt={'google icon'} />
          구글로 간편 로그인하기
        </button>
        <div className="border-t my-6 w-[57px] mx-auto"></div>
      </section>
      <div>
        <h3 className="text-solo-small text-gray-1">
          또는 이메일로 로그인하기 :
        </h3>
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
            로그인하기
          </button>
        </form>
        {/* 추후 다른 페이지 주소 작성 */}
        <Link to="/">
          <span className="text-caption text-gray-2 text-solo-medium">
            비밀번호를 잊었어요
          </span>
        </Link>
        <section className="flex justify-center mt-[60px] gap-2.5">
          <h3>아직 계정이 없나요?</h3>
          {/* 추후 회원가입 페이지 주소 작성 */}
          <Link to="/">
            <span className="underline text-orange-400">무료 회원가입하기</span>
          </Link>
        </section>
      </div>
    </main>
  );
}
