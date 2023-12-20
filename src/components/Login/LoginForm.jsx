/* eslint-disable */
import { React, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import UserInput from './UserInput';
import SubmitButton from './SubmitButton';
import { trylogin } from '../../api/user';
import { getToken } from '../../store/user';

export default function LoginForm({
  message: { describe, button },
  BUTTON_STYLE,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    email: '',
    password: '',
  });
  const [errorData, setErrorData] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const onClickLoginButton = useCallback(
    async (e) => {
      try {
        e.preventDefault();
        const { token } = await trylogin(profile);

        setErrorData(null);
        dispatch(getToken(token));
        navigate('/');
      } catch (error) {
        setErrorData(error.response.data);
        setIsDisabled(true);
      }
    },
    [profile, errorData]
  );

  useEffect(() => {
    setIsDisabled(false);
  }, [profile]);

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
          isNotValid={errorData}
        />
        <UserInput
          type="password"
          value={profile.password}
          onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          placeholder="비밀번호를 입력해주세요"
          isNotValid={errorData}
          errorMessage={errorData && '이메일 및 비밀번호를 확인 해주세요.'}
        />
        <SubmitButton
          onclick={(e) => onClickLoginButton(e)}
          className={`${BUTTON_STYLE} bg-orange-400 text-heading-3 text-white py-[22px] mt-2.5 ${
            // TODO: 버튼 비활성화 색상 피드백 이후 수정
            isDisabled && 'bg-gray-1'
          }`}
          value={button.default}
        />
      </form>
    </section>
  );
}
