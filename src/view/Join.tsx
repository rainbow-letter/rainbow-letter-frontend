/* eslint-disable consistent-return */
/* eslint-disable */
import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../components/Login/Header';
import SignUpForm from '../components/Login/SignUp/SignUpForm';
import LinkAvailable from '../components/Login/LinkAvailable';

import { LOGIN_MESSAGE } from '../components/Login/constants';

export default function Join() {
  const { pathname } = useLocation();

  const message: any = LOGIN_MESSAGE.find((item) => item.pathname === pathname);

  return (
    <main className="h-screen flex flex-col justify-center text-center">
      <Header message={message} />
      <SignUpForm message={message} />
      <LinkAvailable message={message} />
    </main>
  );
}
