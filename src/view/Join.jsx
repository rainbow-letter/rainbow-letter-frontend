/* eslint-disable*/
import { React } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../components/Login/Header';
import JoinForm from '../components/Login/JoinForm';
import LinkAvailable from '../components/Login/LinkAvailable';
import { LOGIN_MESSAGE, BUTTON_STYLE } from '../components/Login/constants';

export default function Join() {
  const location = useLocation();

  const message = LOGIN_MESSAGE.find(
    (item) => item.pathname === location.pathname
  );

  return (
    <main className="h-screen flex flex-col justify-center text-center">
      <Header message={message} BUTTON_STYLE={BUTTON_STYLE} />
      <JoinForm message={message} BUTTON_STYLE={BUTTON_STYLE} />
      <LinkAvailable message={message} />
    </main>
  );
}
