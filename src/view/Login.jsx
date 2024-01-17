/* eslint-disable import/no-cycle */
import { React, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from '../components/Login/Header';
import LinkAvailable from '../components/Login/LinkAvailable';
import Form from '../components/Login/Form';
import { getToken } from '../store/user';
import { trylogin } from '../api/user';
import { LOGIN_MESSAGE, BUTTON_STYLE } from '../components/Login/constants';

export default function Login() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    email: '',
    password: '',
  });
  const [errorData, setErrorData] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const onClickLoginButton = useCallback(
    async (e) => {
      try {
        e.preventDefault();
        const { token } = await trylogin(profile);

        setErrorData(null);
        dispatch(getToken(token));
        navigate('/');
      } catch (error) {
        setErrorData(error.response.data);
        setIsDisabled(true);
      }
    },
    [profile, errorData]
  );

  const message = LOGIN_MESSAGE.find((item) => item.pathname === pathname);

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
        onclick={onClickLoginButton}
        BUTTON_STYLE={BUTTON_STYLE}
      />
      <LinkAvailable message={message} />
    </main>
  );
}
