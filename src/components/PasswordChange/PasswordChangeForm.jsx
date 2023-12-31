/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';

import UserInput from '../Login/UserInput';
import Button from '../Button';

function PasswordChangeForm({ onClick }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isMatching, setIsMatching] = useState(false);

  useEffect(() => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    setIsValidPassword(passwordRegex.test(newPassword));
    setIsMatching(newPassword === confirmPassword);
  }, [newPassword, confirmPassword]);

  return (
    <main className="flex flex-col justify-center h-screen">
      <section>
        <h2 className="text-heading-2 text-center">비밀번호 변경하기</h2>
        <p className="text-solo-medium text-gray-1 text-center mt-[18px]">
          새로운 비밀번호를 입력해주세요
        </p>
      </section>
      <section className="mt-[38px]">
        <label htmlFor="newPassword" className="block p-2.5">
          새 비밀번호
        </label>
        <UserInput
          placeholder="비밀번호를 입력해주세요"
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={({ target }) => setNewPassword(target.value)}
          isNotValid={newPassword.length > 0 && !isValidPassword}
          errorMessage={
            newPassword.length > 0 &&
            !isValidPassword &&
            '영어, 숫자 포함 8자리 이상 입력해주세요.'
          }
        />
        <label htmlFor="newPasswordCheck" className="block p-2.5 mt-2">
          새 비밀번호 확인
        </label>
        <UserInput
          placeholder="비밀번호를 입력해주세요"
          type="password"
          id="newPasswordCheck"
          value={confirmPassword}
          onChange={({ target }) => setConfirmPassword(target.value)}
          isNotValid={
            confirmPassword.length > 0 && newPassword.length > 0 && !isMatching
          }
          errorMessage={
            confirmPassword.length > 0 &&
            newPassword.length > 0 &&
            !isMatching &&
            '비밀번호를 다시 확인해주세요.'
          }
        />
        <Button
          className="mt-5"
          disabled={!isValidPassword || !isMatching}
          onclick={() => onClick(newPassword)}
        >
          제출하기
        </Button>
      </section>
    </main>
  );
}

export default PasswordChangeForm;
