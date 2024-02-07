/* eslint-disable consistent-return */
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import UserInput from 'components/Login/UserInput';
import SubmitButton from 'components/Login/SubmitButton';
import { tryLogin } from 'api/user';
import { Message } from 'components/Login/constants';
import { emailError, emailErrorMessage, passwordError } from 'utils/errorData';
import { saveToken } from '../../utils/localStorage';

type Props = {
  message: Message;
};

export interface ErrorData {
  code: string;
  message: string;
  name: string;
  status: string;
  timestamp: Date;
}

export default function LoginForm({ message: { describe, button } }: Props) {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    email: '',
    password: '',
  });
  const [errorData, setErrorData] = useState<ErrorData | null>();

  useEffect(() => {
    setErrorData(null);
  }, [profile]);

  const onClickLoginButton = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      try {
        e.preventDefault();
        const { token } = await tryLogin(profile);

        setErrorData(null);
        saveToken(token);
        navigate('/home');
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setErrorData(error.response?.data);
        }
      }
    },
    [profile, errorData]
  );

  return (
    <section className="mt-10">
      <header className="flex justify-between items-center">
        <div className="border-t w-[84px]" />
        <h3 className="text-solo-small">{describe}</h3>
        <div className="border-t w-[84px]" />
      </header>
      <form className="mt-6">
        <UserInput
          type="text"
          value={profile.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProfile({ ...profile, email: e.target.value })
          }
          placeholder="이메일을 입력해주세요"
          isNotValid={errorData && emailError(errorData)}
          errorMessage={errorData && emailErrorMessage(errorData)}
          className="mb-[14px]"
        />
        <UserInput
          type="password"
          value={profile.password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProfile({ ...profile, password: e.target.value })
          }
          placeholder="비밀번호를 입력해주세요"
          isNotValid={errorData && passwordError(errorData)}
          errorMessage={errorData && errorData.message}
        />
        <SubmitButton
          onclick={(e: React.MouseEvent<HTMLButtonElement>) =>
            onClickLoginButton(e)
          }
          value={button.default}
          disabled={errorData !== null}
          className={`${
            errorData ? 'bg-gray-1 text-gray-1' : 'bg-orange-400 text-white'
          } text-heading-3  py-[22px] mt-[18px] w-full rounded-[15px] flex justify-center items-center`}
        />
      </form>
    </section>
  );
}
