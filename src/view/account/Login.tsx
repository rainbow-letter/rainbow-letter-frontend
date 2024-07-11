import { useLocation } from 'react-router-dom';

import Header from 'components/Login/Header';
import LinkAvailable from 'components/Login/LinkAvailable';
import LoginForm from 'components/Login/LoginForm';
import { LOGIN_MESSAGE, Message } from 'components/Login/constants';

export default function Login() {
  const { pathname } = useLocation();

  const message = LOGIN_MESSAGE.find(
    (item) => item.pathname === pathname
  ) as Message;

  return (
    <main className="flex h-screen flex-col justify-center text-center">
      <Header message={message} />
      <LoginForm message={message} />
      <LinkAvailable className="justify-around" message={message} />
    </main>
  );
}
