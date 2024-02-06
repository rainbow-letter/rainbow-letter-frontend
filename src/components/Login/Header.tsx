import React from 'react';

import { Message } from 'components/Login/constants';
import googleIcon from '../../assets/google_icon.png';

type Props = { message: Message };

export default function Header({ message: { title, button } }: Props) {
  return (
    <section>
      <h2 className="text-heading-2">{title}</h2>
      <a
        href={`${process.env.REACT_APP_API_URL}/api/oauth2/authorization/google`}
        type="button"
        className="border text-solo-large mt-10 gap-5 py-6 w-full rounded-[15px] flex justify-center items-center"
      >
        <img src={googleIcon} alt="google icon" />
        {button.google}
      </a>
    </section>
  );
}
