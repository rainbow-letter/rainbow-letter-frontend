import { useLocation } from 'react-router-dom';

import Header from 'components/Login/Header';
import SignUpForm from 'components/Login/SignUp/SignUpForm';
import LinkAvailable from 'components/Login/LinkAvailable';
import { LOGIN_MESSAGE, Message } from 'components/Login/constants';

export default function Join() {
  const { pathname } = useLocation();

  const message = LOGIN_MESSAGE.find(
    (item) => item.pathname === pathname
  ) as Message;

  return (
    <main className="flex h-screen flex-col justify-center text-center">
      <Header message={message} />
      <SignUpForm message={message} />
      <LinkAvailable message={message} />
    </main>
  );
}
