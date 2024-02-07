/* eslint-disable consistent-return */
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import UserInput from 'components/Login/UserInput';
import SubmitButton from 'components/Login/SubmitButton';
import Agree from 'components/Login/SignUp/Agree';

import { ERROR_MESSAGE, Message } from 'components/Login/constants';
import { trySignUp, tryLogin } from 'api/user';
import { ErrorData } from 'components/Login/LoginForm';
import { emailError, emailErrorMessage, passwordError } from 'utils/errorData';
import { saveToken } from '../../../utils/localStorage';
import { validateEmail, validatePassword } from '../../../utils/validators';

type Props = {
  message: Message;
};

type Profile = {
  email: string;
  password: string;
};

export interface ValidError {
  code: string;
  message: string;
}

export default function SignUpForm({ message: { describe, button } }: Props) {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile>({
    email: '',
    password: '',
  });
  const [errorData, setErrorData] = useState<ErrorData | ValidError | null>(
    null
  );
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    setErrorData(null);
  }, [profile, isChecked]);

  const isCheckProperForm = () => {
    const { email, password } = profile;
    if (!validateEmail(email)) {
      throw new Error('NOT_VALID_EMAIL');
    }
    if (!validatePassword(password)) {
      throw new Error('NOT_VALID_PASSWORD');
    }
  };

  const onErrorHandling = (error: unknown) => {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return setErrorData(error.response && error.response.data);
      }
    }
    if (error instanceof Error) {
      setErrorData({
        code: error.message,
        message: ERROR_MESSAGE[error.message],
      });
    }
  };

  const onClickSignUpButton = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      try {
        e.preventDefault();
        isCheckProperForm();
        if (!isChecked) {
          return alert('서비스 이용약관 및 개인정보 처리방침을 체크해주세요!');
        }
        await trySignUp(profile);
        const { token } = await tryLogin(profile);
        saveToken(token);

        setErrorData(null);
        navigate('/home');
      } catch (error) {
        onErrorHandling(error);
      }
    },
    [profile, errorData, isChecked]
  );

  return (
    <section className="mt-12">
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
        />
        <UserInput
          type="password"
          value={profile.password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProfile({ ...profile, password: e.target.value })
          }
          placeholder="비밀번호를 입력해주세요"
          isNotValid={errorData && passwordError(errorData)}
          errorMessage={errorData && errorData?.message}
        />
        <Agree setIsChecked={setIsChecked} />
        <SubmitButton
          onclick={(e: React.MouseEvent<HTMLButtonElement>) =>
            onClickSignUpButton(e)
          }
          disabled={errorData}
          className={`${
            errorData ? 'bg-gray-1 text-gray-1' : 'bg-orange-400 text-white'
          } w-full rounded-[15px] flex justify-center items-center text-heading-3 py-[22px] mt-6`}
          value={button.default}
        />
      </form>
    </section>
  );
}
