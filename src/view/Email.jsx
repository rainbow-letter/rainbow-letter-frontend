/* eslint-disable */
import { React, useState } from 'react';

import UserInput from '../components/Login/UserInput';
import { authEmail } from '../api/user';

import { BUTTON_STYLE } from '../components/Login/constants';

export default function Email() {
  const [auth, setAuth] = useState({ email: '' });
  const [errorData, setErrorData] = useState(null);

  const onClickFindEmailButton = async () => {
    try {
      await authEmail(auth);
      alert('이메일을 확인하세요!');
    } catch (error) {
      setErrorData(error.response.data);
    }
  };

  return (
    <main className="h-screen flex flex-col justify-center">
      <h2 className="text-heading-2 text-center leading-[180%]">
        비밀번호를 찾을
        <br /> 이메일을 입력해주세요
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
        className={`${BUTTON_STYLE} bg-orange-400 text-heading-3 text-white py-[22px] mt-12`}
      >
        제출하기
      </button>
    </main>
  );
}
