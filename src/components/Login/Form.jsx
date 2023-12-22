/* eslint-disable */
import { React, useEffect } from 'react';

import UserInput from './UserInput';
import SubmitButton from './SubmitButton';

export default function Form({
  message: { describe, button },
  profile,
  setProfile,
  errorData,
  isDisabled,
  setIsDisabled,
  onclick,
  BUTTON_STYLE,
}) {
  useEffect(() => {
    setIsDisabled(false);
  }, [profile]);

  return (
    <section className="mt-[44px]">
      <header className="flex justify-between items-center">
        <div className="border-t w-[84px]" />
        <h3 className="text-solo-small">{describe}</h3>
        <div className="border-t w-[84px]" />
      </header>
      <form className="mt-[26px]">
        <UserInput
          type="text"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          placeholder="이메일을 입력해주세요"
          isNotValid={
            (errorData && errorData.code === 'EXISTS_EMAIL') ||
            (errorData && errorData.code === 'NOT_VALID_EMAIL') ||
            (errorData && errorData.code === 'METHOD_ARGUMENT_NOT_VALID') ||
            (errorData && errorData.code === 'CHECK_EMAIL_AND_PASSWORD')
          }
          errorMessage={
            (errorData &&
              errorData.code === 'EXISTS_EMAIL' &&
              errorData.message) ||
            (errorData &&
              errorData.code === 'NOT_VALID_EMAIL' &&
              errorData.message)
          }
        />
        <UserInput
          type="password"
          value={profile.password}
          onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          placeholder="비밀번호를 입력해주세요"
          isNotValid={
            (errorData && errorData.code === 'NOT_VALID_PASSWORD') ||
            (errorData && errorData.code === 'METHOD_ARGUMENT_NOT_VALID') ||
            (errorData && errorData.code === 'CHECK_EMAIL_AND_PASSWORD')
          }
          errorMessage={errorData && errorData.message}
        />
        <SubmitButton
          onclick={(e) => onclick(e)}
          className={`${BUTTON_STYLE} bg-orange-400 text-heading-3 text-white py-[22px] mt-2.5 ${
            isDisabled && 'bg-gray-1 text-[#898989]'
          }`}
          value={button.default}
        />
      </form>
    </section>
  );
}
