/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
import { React, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from '../components/Login/Header';
import Form from '../components/Login/Form';
import LinkAvailable from '../components/Login/LinkAvailable';
import { trySignUp, trylogin } from '../api/user';
import { getToken } from '../store/user';
import { validateEmail, validatePassword } from '../utils/validators';
import {
  LOGIN_MESSAGE,
  BUTTON_STYLE,
  ERROR_MESSAGE,
} from '../components/Login/constants';

export default function Join() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    email: '',
    password: '',
  });
  const [errorData, setErrorData] = useState(null);

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
        await trySignUp(profile);
        const { token } = await trylogin(profile);
        dispatch(getToken(token));

        setErrorData(null);
        navigate('/');
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
    [profile, errorData]
  );

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
        setProfile={setProfile}
        setErrorData={setErrorData}
        onclick={onClickSignUpButton}
        BUTTON_STYLE={BUTTON_STYLE}
      />
      <LinkAvailable message={message} />
    </main>
  );
}
