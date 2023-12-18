/* eslint-disable*/
import { React, useState, useCallback } from 'react';

import UserInput from './UserInput';
import { trySignUp } from '../../api/user';

export default function JoinForm({
  message: { describe, button },
  BUTTON_STYLE,
}) {
  const [profile, setProfile] = useState({
    email: '',
    password: '',
  });
  const [errorData, setErrorData] = useState(null);

  const onClickSignUpButton = useCallback(
    async (e) => {
      try {
        e.preventDefault();
        const data = await trySignUp(profile);
        console.log(data);

        setErrorData(null);
      } catch (error) {
        setErrorData(error.response.data);
      }
    },
    [profile, errorData]
  );
  console.log(errorData);

  return (
    <section>
      <h3 className="text-solo-small text-gray-1">{describe}</h3>
      <form className="my-5">
        <UserInput
          type="text"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          placeholder="이메일을 입력해주세요"
          isNotValid={
            (errorData && errorData.code === 'EXISTS_EMAIL') ||
            (errorData &&
              errorData.message === '유효하지 않은 이메일 형식입니다.')
          }
          errorMessage={errorData && errorData.message}
        />
        <UserInput
          type="password"
          value={profile.password}
          onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          placeholder="비밀번호를 입력해주세요"
          isNotValid={
            errorData &&
            errorData.message ===
              '비밀번호는 영문, 숫자를 조합하여 8자 이상으로 입력해주세요.'
          }
          errorMessage={errorData && errorData.message}
        />
        <button
          type="submit"
          onClick={(e) => onClickSignUpButton(e)}
          className={`${BUTTON_STYLE} bg-orange-400 text-heading-3 text-white`}
        >
          {button.default}
        </button>
      </form>
    </section>
  );
}
