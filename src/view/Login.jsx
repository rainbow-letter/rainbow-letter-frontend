import React from 'react';

const BUTTON_STYLE = 'px-11 py-6 rounded-full w-full';
const INPUT_STYLE =
  'w-full border-[0.5px] rounded-[15px] text-sm py-[21.5px] pl-[21px] mb-2.5';

export default function Login() {
  return (
    <main className="text-center">
      <section>
        <h2 className="text-test">다시 와주셨네요!</h2>
        <button type="button" className={`${BUTTON_STYLE} border`}>
          구글로 간편 로그인하기
        </button>
      </section>
      <div>
        <h3>또는 이메일로 로그인하기:</h3>
        <form>
          <input
            type="text"
            value="이메일을 입력해주세요"
            className={INPUT_STYLE}
          />
          <input
            type="text"
            value="비밀번호를 입력해주세요"
            className={INPUT_STYLE}
          />
          <button type="button" className={`${BUTTON_STYLE} bg-orange-400 `}>
            로그인하기
          </button>
        </form>
        <input type="button" value="비밀번호를 잊었어요" />
        <section className="flex justify-center">
          <h3>아직 계정이 없나요?</h3>
          <input type="button" value="무료 회원가입하기" />
        </section>
      </div>
    </main>
  );
}
