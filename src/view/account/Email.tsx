import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import UserInput from 'components/Login/UserInput';
import { authEmail } from 'api/user';

import { FIND_EMAIL_MESSAGE } from 'components/Login/constants';

import { ErrorData } from 'components/Login/LoginForm';

export default function Email() {
  const [auth, setAuth] = useState({ email: '' });
  const [errorData, setErrorData] = useState<ErrorData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onClickFindEmailButton = async () => {
    try {
      await authEmail(auth);
      alert('비밀번호 변경 메일이 발송됐어요!');
      setIsLoading(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorData(error.response?.data);
      }
    }
  };

  return (
    <main className="flex h-screen flex-col justify-center">
      <h2 className="text-center text-heading-2 leading-[180%]">
        {FIND_EMAIL_MESSAGE.TITLE}
      </h2>
      <p className="mt-2 text-center text-solo-medium leading-[166%] text-gray-1">
        {FIND_EMAIL_MESSAGE.DESCRIPTION}
      </p>
      <UserInput
        className="mt-[4.063rem]"
        type="text"
        placeholder="이메일을 입력해주세요"
        value={auth.email}
        onChange={(e) => setAuth({ ...auth, email: e.target.value })}
        isNotValid={!!errorData}
        errorMessage={errorData && errorData.message}
      />
      <button
        type="submit"
        disabled={isLoading}
        onClick={() => onClickFindEmailButton()}
        className="mt-5 flex w-full items-center justify-center rounded-2xl bg-orange-400 py-[1.375rem] text-heading-3 text-white"
      >
        {FIND_EMAIL_MESSAGE.SUBMIT}
      </button>
      <div className="mt-[1.687rem] text-center text-body-small text-gray-1">
        <p>{FIND_EMAIL_MESSAGE.ANNOUNCEMENT_1}</p>
        <p>
          <Link
            to="https://blog.naver.com/rainbowletter/223328951209"
            target="_blank"
          >
            <span className="underline">{FIND_EMAIL_MESSAGE.ANNOUNCEMENT}</span>
          </Link>
          <span>{FIND_EMAIL_MESSAGE.ANNOUNCEMENT_2}</span>
        </p>
      </div>
    </main>
  );
}
