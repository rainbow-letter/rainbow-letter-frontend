/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
import { React, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import UserInput from '../UserInput';
import Agree from './Agree';
import SubmitButton from '../SubmitButton';
import { trySignUp, tryLogin } from '../../../api/user';
import { getToken } from '../../../store/user';
import { validateEmail, validatePassword } from '../../../utils/validators';
import {
  emailError,
  emailErrorMessage,
  passwordError,
} from '../../../utils/errorData';

import { ERROR_MESSAGE } from '../constants';

export default function SignUpForm({ message: { describe, button } }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({
    email: '',
    password: '',
  });
  const [errorData, setErrorData] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setErrorData(null);
  }, [profile, isChecked]);

  const isCheckProperForm = () => {
    const { email, password } = profile;
    if (!validateEmail(email)) {
      throw new Error('NOT_VALID_EMAIL');
    }
    if (!validatePassword(password)) {
      throw new Error('NOT_VALID_PASSWORD');
    }
  };

  const onClickSignUpButton = useCallback(
    async (e) => {
      try {
        e.preventDefault();
        isCheckProperForm();
        if (!isChecked) {
          setErrorData(true);
          return alert('서비스 이용약관 및 개인정보 처리방침을 체크해주세요!');
        }
        await trySignUp(profile);
        const { token } = await tryLogin(profile);
        dispatch(getToken(token));

        setErrorData(null);
        navigate('/home');
      } catch (error) {
        if (error.response) {
          return setErrorData(error.response && error.response.data);
        }
        setErrorData({
          code: error.message,
          message: ERROR_MESSAGE[error.message],
        });
      }
    },
    [profile, errorData, isChecked]
  );

  return (
    <section className="mt-[46px]">
      <header className="flex justify-between items-center">
        <div className="border-t w-[84px]" />
        <h3 className="text-solo-small">{describe}</h3>
        <div className="border-t w-[84px]" />
      </header>
      <form className="mt-[24px]">
        <UserInput
          type="text"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          placeholder="이메일을 입력해주세요"
          isNotValid={errorData && emailError(errorData)}
          errorMessage={errorData && emailErrorMessage(errorData)}
        />
        <UserInput
          type="password"
          value={profile.password}
          onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          placeholder="비밀번호를 입력해주세요"
          isNotValid={errorData && passwordError(errorData)}
          errorMessage={errorData && errorData.message}
        />
        <Agree setIsChecked={setIsChecked} />
        <SubmitButton
          onclick={(e) => onClickSignUpButton(e)}
          disabled={errorData}
          className={`${
            errorData ? 'bg-gray-1 text-gray-1' : 'bg-orange-400 text-white'
          } w-full rounded-[15px] flex justify-center items-center text-heading-3 py-[22px] mt-6`}
          value={button.default}
        />
      </form>
    </section>
  );
}
