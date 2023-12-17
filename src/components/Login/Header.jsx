import React from 'react';

import googleIcon from '../../assets/Google Icon.svg';

export default function Header({ message: { title, button }, BUTTON_STYLE }) {
  return (
    <section>
      <h2 className="text-heading-2">{title}</h2>
      <button
        type="button"
        className={`${BUTTON_STYLE} border text-solo-medium text-gray-1 mt-5 gap-2`}
      >
        <img src={googleIcon} alt="google icon" />
        {button.google}
      </button>
      <div className="border-t my-6 w-[57px] mx-auto" />
    </section>
  );
}
