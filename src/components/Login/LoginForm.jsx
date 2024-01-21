/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
import { React, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import UserInput from './UserInput';
import SubmitButton from './SubmitButton';
import { trylogin } from '../../api/user';
import { getToken } from '../../store/user';
import {
  emailError,
  emailErrorMessage,
  passwordError,
} from '../../utils/errorData';

export default function LoginForm({ message: { describe, button } }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({
    email: '',
    password: '',
  });
  const [errorData, setErrorData] = useState(null);

  useEffect(() => {
    setErrorData(null);
  }, [profile]);

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
      }
    },
    [profile, errorData]
  );

  return (
    <section className="mt-[43px]">
      <header className="flex justify-between items-center">
        <div className="border-t w-[84px]" />
        <h3 className="text-solo-small">{describe}</h3>
        <div className="border-t w-[84px]" />
      </header>
      <form className="mt-[24px]">
        <UserInput
          type="text"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          placeholder="이메일을 입력해주세요"
          isNotValid={errorData && emailError(errorData)}
          errorMessage={errorData && emailErrorMessage(errorData)}
          className="mb-[14px]"
        />
        <UserInput
          type="password"
          value={profile.password}
          onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          placeholder="비밀번호를 입력해주세요"
          isNotValid={errorData && passwordError(errorData)}
          errorMessage={errorData && errorData.message}
        />
        <SubmitButton
          onclick={(e) => onClickLoginButton(e)}
          disabled={errorData}
          className={`${
            errorData ? 'bg-gray-1 text-gray-1' : 'bg-orange-400 text-white'
          } text-heading-3  py-[22px] mt-[18px] w-full rounded-[15px] flex justify-center items-center`}
          value={button.default}
        />
      </form>
    </section>
  );
}
