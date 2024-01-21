/* eslint-disable import/no-cycle */
import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import UserInput from '../components/Login/UserInput';
import { authEmail } from '../api/user';

import { FIND_EMAIL_MESSAGE } from '../components/Login/constants';

export default function Email() {
  const [auth, setAuth] = useState({ email: '' });
  const [errorData, setErrorData] = useState(null);

  const onClickFindEmailButton = async () => {
    try {
      await authEmail(auth);
      alert('비밀번호 변경 메일이 발송됐어요!');
    } catch (error) {
      setErrorData(error.response.data);
    }
  };

  return (
    <main className="h-screen flex flex-col justify-center">
      <h2 className="text-heading-2 text-center leading-[180%]">
        {FIND_EMAIL_MESSAGE.TITLE}
      </h2>
      <p className="text-solo-medium text-gray-1 text-center mt-[8px] leading-[166%]">
        {FIND_EMAIL_MESSAGE.DESCRIPTION}
      </p>
      <UserInput
        className="mt-[65px]"
        type="text"
        placeholder="이메일을 입력해주세요"
        value={auth.email}
        onChange={(e) => setAuth({ ...auth, email: e.target.value })}
        isNotValid={errorData && errorData}
        errorMessage={errorData && errorData.message}
      />
      <button
        type="submit"
        onClick={() => onClickFindEmailButton()}
        className="w-full rounded-[15px] flex justify-center items-center bg-orange-400 text-heading-3 text-white py-[22px] mt-[20px]"
      >
        {FIND_EMAIL_MESSAGE.SUBMIT}
      </button>
      <div className="mt-[27px] text-center text-gray-1 text-body-small">
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
