import {
  useState,
  useEffect,
  useCallback,
  MouseEvent,
  ChangeEvent,
} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import UserInput from 'components/Login/UserInput';
import SubmitButton from 'components/Login/SubmitButton';
import { Message } from 'components/Login/constants';
import { tryLogin } from 'api/user';
import { emailError, emailErrorMessage, passwordError } from 'utils/errorData';
import { saveToken, setExpireToken } from 'utils/localStorage';

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

  const setLocalTokenDate = (token: string) => {
    saveToken(token);
    const date = Date.now() + 7 * 24 * 60 * 60 * 1000;
    setExpireToken(String(date));
  };

  const onClickLoginButton = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      try {
        e.preventDefault();
        const { token } = await tryLogin(profile);

        setErrorData(null);
        setLocalTokenDate(token);
        navigate('/');
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
      <header className="flex items-center justify-between">
        <div className="w-[5.25rem] border-t" />
        <h3 className="text-solo-small">{describe}</h3>
        <div className="w-[5.25rem] border-t" />
      </header>
      <form className="mt-6">
        <UserInput
          className="mb-3.5"
          errorMessage={errorData && emailErrorMessage(errorData)}
          isNotValid={errorData && emailError(errorData)}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setProfile({ ...profile, email: e.target.value })
          }
          placeholder="이메일을 입력해주세요"
          type="text"
          value={profile.email}
        />
        <UserInput
          errorMessage={errorData && errorData.message}
          isNotValid={errorData && passwordError(errorData)}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setProfile({ ...profile, password: e.target.value })
          }
          placeholder="비밀번호를 입력해주세요"
          type="password"
          value={profile.password}
        />
        <SubmitButton
          className={`${
            errorData ? 'bg-gray-1 text-gray-1' : 'bg-orange-400 text-white'
          } mt-[1.125rem] flex w-full items-center justify-center rounded-2xl py-[1.375rem] text-heading-3`}
          disabled={errorData !== null}
          onclick={(e: MouseEvent<HTMLButtonElement>) => onClickLoginButton(e)}
          value={button.default}
        />
      </form>
    </section>
  );
}
