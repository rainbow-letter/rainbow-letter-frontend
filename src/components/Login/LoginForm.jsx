import React from 'react';

const INPUT_STYLE =
  'w-full rounded-[15px] py-[21.5px] pl-[21.25px] bg-gray-2 text-gray-2 text-solo-small mb-2.5';

export default function LoginForm({
  message: { describe, button },
  BUTTON_STYLE,
}) {
  return (
    <section>
      <h3 className="text-solo-small text-gray-1">{describe}</h3>
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
          {button.default}
        </button>
      </form>
    </section>
  );
}
