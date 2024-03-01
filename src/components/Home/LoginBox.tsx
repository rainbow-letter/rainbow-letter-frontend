import React from 'react';
import { Link } from 'react-router-dom';

import { INFO_MESSAGES, USER_ACTIONS } from 'components/Home/constants';

export default function LoginBox() {
  return (
    <article className="flex flex-col items-center gap-y-5 py-5 px-[1.063rem] border border-gray-3 rounded-2xl">
      <header className="flex flex-col items-center gap-y-3">
        <h4 className="text-heading-3 font-bold">
          {INFO_MESSAGES.LOGIN_ABSENT}
        </h4>
        <p>{INFO_MESSAGES.INFOMATION_ABOUT_LETTER_WRITING_METHOD}</p>
      </header>
      <main className="flex gap-x-4 w-full h-[3.812rem] text-solo-large font-bold">
        <Link
          to="/login"
          className="flex items-center justify-center w-full bg-orange-400 text-white rounded-2xl"
        >
          {USER_ACTIONS.LOGIN}
        </Link>
        <Link
          to="/sign-up"
          className="flex items-center justify-center w-full text-orange-400 border-orange-400 border-2 rounded-2xl"
        >
          {USER_ACTIONS.SIGH_UP}
        </Link>
      </main>
    </article>
  );
}
