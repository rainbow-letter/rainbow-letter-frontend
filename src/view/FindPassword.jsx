/* eslint-disable */
import { React, useState } from 'react';

import UserInput from '../components/Login/UserInput';
import { findEmail } from '../api/user';

import { BUTTON_STYLE } from '../components/Login/constants';

export default function FindPassword() {
  const [email, setEmail] = useState('');

  const onClickFindEmailButton = async () => {
    try {
      const data = await findEmail(email);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="h-screen flex flex-col justify-center">
      <h2 className="text-heading-2 text-center mb-6">
        비밀번호를 찾을
        <br /> 이메일을 입력해주세요
      </h2>
      <UserInput
        type="text"
        placeholder="이메일을 입력해주세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        onClick={() => onClickFindEmailButton()}
        className={`${BUTTON_STYLE} bg-orange-400 text-heading-3 text-white`}
      >
        입력하기
      </button>
    </main>
  );
}