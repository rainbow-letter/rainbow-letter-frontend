/* eslint-disable*/
import { React, useCallback } from 'react';

import { trySignUp } from '../../api/user';

const INPUT_STYLE =
  'w-full rounded-[15px] py-[21.5px] pl-[21.25px] bg-gray-2 text-gray-2 text-solo-small mb-2.5';
const data = {
  email: 'user@email.com',
  password: 'user1234',
};

export default function JoinForm({
  message: { describe, button },
  BUTTON_STYLE,
}) {
  const onClickSignUpButton = useCallback(async (e) => {
    try {
      e.preventDefault();
      const { response } = await trySignUp(data);
      console.log(response);
    } catch (error) {
      const errorData = error.response.data;
      console.log(errorData);
    }
  }, []);

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
          onClick={(e) => onClickSignUpButton(e)}
          className={`${BUTTON_STYLE} bg-orange-400 text-heading-3 text-white mt-0.5`}
        >
          {button.default}
        </button>
      </form>
    </section>
  );
}
