/* eslint-disable */
import { React, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import UserInput from './UserInput';
import SubmitButton from './SubmitButton';
import { trySignUp } from '../../api/user';
import { validateEmail, validatePassword } from '../../utils/validators';
import { ERROR_MESSAGE } from './constants';

export default function JoinForm({
  message: { describe, button },
  BUTTON_STYLE,
}) {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    email: '',
    password: '',
  });
  const [errorData, setErrorData] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const onClickSignUpButton = useCallback(
    async (e) => {
      try {
        e.preventDefault();
        isCheckProperForm();
        await trySignUp(profile);

        setErrorData(null);
        navigate('/login');
      } catch (error) {
        if (error.response) {
          setErrorData(error.response && error.response.data);
        }
        if (!error.response) {
          setErrorData({
            code: error.message,
            message: ERROR_MESSAGE[error.message],
          });
        }
      } finally {
        setIsDisabled(true);
      }
    },
    [profile, errorData]
  );

  useEffect(() => {
    setIsDisabled(false);
  }, [profile]);

  const isCheckProperForm = () => {
    const { email, password } = profile;
    if (!validateEmail(email)) {
      throw new Error('NOT_VALID_EMAIL');
    }
    if (!validatePassword(password)) {
      throw new Error('NOT_VALID_PASSWORD');
    }
  };

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
            (errorData && errorData.code === 'NOT_VALID_EMAIL')
          }
          errorMessage={errorData && errorData.message}
        />
        <UserInput
          type="password"
          value={profile.password}
          onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          placeholder="비밀번호를 입력해주세요"
          isNotValid={errorData && errorData.code === 'NOT_VALID_PASSWORD'}
          errorMessage={errorData && errorData.message}
        />
        <SubmitButton
          onclick={(e) => onClickSignUpButton(e)}
          className={`${BUTTON_STYLE} bg-orange-400 text-heading-3 text-white py-[22px] mt-2.5 ${
            isDisabled && 'bg-gray-1 text-[#898989]'
          }`}
          value={button.default}
        />
      </form>
    </section>
  );
}
