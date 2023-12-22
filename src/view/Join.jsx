/* eslint-disable*/
import { React, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Header from '../components/Login/Header';
import Form from '../components/Login/Form';
import LinkAvailable from '../components/Login/LinkAvailable';
import { trySignUp } from '../api/user';
import { validateEmail, validatePassword } from '../utils/validators';
import {
  LOGIN_MESSAGE,
  BUTTON_STYLE,
  ERROR_MESSAGE,
} from '../components/Login/constants';

export default function Join() {
  const location = useLocation();
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
          return setErrorData(error.response && error.response.data);
        }
        setErrorData({
          code: error.message,
          message: ERROR_MESSAGE[error.message],
        });

        setIsDisabled(true);
      }
    },
    [profile, errorData]
  );

  const isCheckProperForm = () => {
    const { email, password } = profile;
    if (!validateEmail(email)) {
      throw new Error('NOT_VALID_EMAIL');
    }
    if (!validatePassword(password)) {
      throw new Error('NOT_VALID_PASSWORD');
    }
  };

  const message = LOGIN_MESSAGE.find(
    (item) => item.pathname === location.pathname
  );

  return (
    <main className="h-screen flex flex-col justify-center text-center">
      <Header message={message} BUTTON_STYLE={BUTTON_STYLE} />
      <Form
        message={message}
        profile={profile}
        errorData={errorData}
        isDisabled={isDisabled}
        setProfile={setProfile}
        setIsDisabled={setIsDisabled}
        onclick={onClickSignUpButton}
        BUTTON_STYLE={BUTTON_STYLE}
      />
      <LinkAvailable message={message} />
    </main>
  );
}
