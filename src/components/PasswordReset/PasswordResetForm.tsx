import { useState } from 'react';

import UserInput from 'components/Login/UserInput';
import Button from 'components/Button';
import { UPDATE_PASSWORD_MESSAGE } from 'components/Login/constants';
import { validatePassword, validatePasswordMatch } from 'utils/validators';

type Props = {
  onClick: (password: string) => void;
};

function PasswordResetForm({ onClick }: Props) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const isValidPassword = validatePassword(newPassword);
  const isMatching = validatePasswordMatch(newPassword, confirmPassword);

  return (
    <main className="flex h-screen flex-col justify-center">
      <section>
        <h2 className="text-center text-heading-2">
          {UPDATE_PASSWORD_MESSAGE.TITLE}
        </h2>
        <p className="mt-[1.125rem] text-center text-solo-medium text-gray-1">
          {UPDATE_PASSWORD_MESSAGE.DESCRIPTION}
        </p>
      </section>
      <section className="mt-[2.375rem]">
        <label className="block p-2.5" htmlFor="newPassword">
          {UPDATE_PASSWORD_MESSAGE.NEW_PASSWORD}
        </label>
        <UserInput
          errorMessage={
            newPassword.length > 0 &&
            !isValidPassword &&
            '영어, 숫자 포함 8자리 이상 입력해주세요.'
          }
          id="newPassword"
          isNotValid={newPassword.length > 0 && !isValidPassword}
          onChange={({ target }) => setNewPassword(target.value)}
          placeholder="비밀번호를 입력해주세요"
          type="password"
          value={newPassword}
        />
        <label className="mt-2 block p-2.5" htmlFor="newPasswordCheck">
          {UPDATE_PASSWORD_MESSAGE.NEW_PASSWORD_CONFIRM}
        </label>
        <UserInput
          errorMessage={
            confirmPassword.length > 0 &&
            newPassword.length > 0 &&
            !isMatching &&
            '비밀번호를 다시 확인해주세요.'
          }
          id="newPasswordCheck"
          isNotValid={
            confirmPassword.length > 0 && newPassword.length > 0 && !isMatching
          }
          onChange={({ target }) => setConfirmPassword(target.value)}
          placeholder="비밀번호를 입력해주세요"
          type="password"
          value={confirmPassword}
        />
        <Button
          className="mt-5"
          disabled={!isValidPassword || !isMatching}
          onClick={() => onClick(newPassword)}
        >
          {UPDATE_PASSWORD_MESSAGE.UPDATE}
        </Button>
      </section>
    </main>
  );
}

export default PasswordResetForm;
