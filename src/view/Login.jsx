/* eslint-disable import/no-cycle */
import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../components/Login/Header';
import LoginForm from '../components/Login/LoginForm';
import LinkAvailable from '../components/Login/LinkAvailable';

import { LOGIN_MESSAGE } from '../components/Login/constants';

export default function Login() {
  const { pathname } = useLocation();

  const message = LOGIN_MESSAGE.find((item) => item.pathname === pathname);

  return (
    <main className="h-screen flex flex-col justify-center text-center">
      <Header message={message} />
      <LoginForm message={message} />
      <LinkAvailable message={message} />
    </main>
  );
}
