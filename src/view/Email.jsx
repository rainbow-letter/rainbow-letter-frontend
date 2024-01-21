/* eslint-disable import/no-cycle */
import { React, useState } from 'react';

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
        {FIND_EMAIL_MESSAGE.PASSWORD}
        <br />
        {FIND_EMAIL_MESSAGE.EMAIL}
      </h2>
      <UserInput
        className="mt-2.5"
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
        className="w-full rounded-[15px] flex justify-center items-center bg-orange-400 text-heading-3 text-white py-[22px] mt-12"
      >
        {FIND_EMAIL_MESSAGE.SUBMIT}
      </button>
    </main>
  );
}
