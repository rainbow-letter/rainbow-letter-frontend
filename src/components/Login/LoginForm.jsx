import { React, useState, useCallback } from 'react';

import { trylogin } from '../../api/user';

const INPUT_STYLE =
  'w-full rounded-[15px] py-[21.5px] pl-[21.25px] bg-gray-2 text-gray-2 text-solo-small mb-2.5';

export default function LoginForm({
  message: { describe, button },
  BUTTON_STYLE,
}) {
  const [profile, setProfile] = useState({
    email: '',
    password: '',
  });

  const onClickLoginButton = useCallback(
    async (e) => {
      try {
        e.preventDefault();
        const data = await trylogin(profile);

        console.log(data);
      } catch (error) {
        const errorData = error.response.data;

        console.log(errorData);
      }
    },
    [profile]
  );

  return (
    <section>
      <h3 className="text-solo-small text-gray-1">{describe}</h3>
      <form className="my-5">
        <input
          type="text"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          placeholder="이메일을 입력해주세요"
          className={`${INPUT_STYLE} mb`}
        />
        <input
          type="password"
          value={profile.password}
          onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          placeholder="비밀번호를 입력해주세요"
          className={INPUT_STYLE}
        />
        <button
          type="submit"
          onClick={(e) => onClickLoginButton(e)}
          className={`${BUTTON_STYLE} bg-orange-400 text-heading-3 text-white mt-0.5`}
        >
          {button.default}
        </button>
      </form>
    </section>
  );
}
