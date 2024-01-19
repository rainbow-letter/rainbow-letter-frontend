import React from 'react';

import googleIcon from '../../assets/google_icon.png';

export default function Header({ message: { title, button }, BUTTON_STYLE }) {
  return (
    <section>
      <h2 className="text-heading-2">{title}</h2>
      <a
        href={`${process.env.REACT_APP_API_URL}/api/oauth2/authorization/google`}
        type="button"
        className={`${BUTTON_STYLE} border text-solo-medium mt-[35px] gap-3 py-7`}
      >
        <img src={googleIcon} alt="google icon" />
        {button.google}
      </a>
    </section>
  );
}
