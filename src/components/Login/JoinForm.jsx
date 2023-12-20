/* eslint-disable */
import { React, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import UserInput from './UserInput';
import { trySignUp } from '../../api/user';

export default function JoinForm({
  message: { describe, button },
  BUTTON_STYLE,
}) {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    email: '',
    password: '',
  });
  const [errorData, setErrorData] = useState(null);

  const onClickSignUpButton = useCallback(
    async (e) => {
      try {
        e.preventDefault();
        await trySignUp(profile);

        setErrorData(null);
        navigate('/login');
      } catch (error) {
        setErrorData(error.response.data);
      }
    },
    [profile, errorData]
  );

  return (
    <section className="mt-[44px]">
      <header className="flex justify-between items-center">
        <div className="border-t w-[84px]" />
        <h3 className="text-solo-small">{describe}</h3>
        <div className="border-t w-[84px]" />
      </header>
      <form className="mt-[26px]">
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
          className={`${BUTTON_STYLE} bg-orange-400 text-heading-3 text-white py-[22px] mt-2.5`}
        >
          {button.default}
        </button>
      </form>
    </section>
  );
}
