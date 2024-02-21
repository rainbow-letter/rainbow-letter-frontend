import React from 'react';
import { Link } from 'react-router-dom';

import { INFO_MESSAGES, USER_ACTIONS } from 'components/Home/constants';

export default function LoginBox() {
  return (
    <article className="mt-5 border rounded-2xl border-gray-3 px-[1.063rem] flex flex-col items-center">
      <h4 className="text-heading-3 mt-[1.875rem] mb-[0.813rem]">
        {INFO_MESSAGES.LOGIN_ABSENT}
      </h4>
      <p>{INFO_MESSAGES.INFOMATION_ABOUT_LETTER_WRITING_METHOD}</p>
      <div className="flex w-full h-[3.812rem] mt-[1.125rem] mb-4 text-solo-large gap-4">
        <Link to="/login" className="w-full">
          <button
            type="button"
            className="w-full h-full py-5 px-[1.375rem] bg-orange-400 text-white rounded-2xl"
          >
            {USER_ACTIONS.LOGIN}
          </button>
        </Link>
        <Link to="/sign-up" className="w-full">
          <button
            type="button"
            className="w-full h-full py-5 px-[1.375rem] text-orange-400 border-orange-400 border-2 rounded-2xl"
          >
            {USER_ACTIONS.SIGH_UP}
          </button>
        </Link>
      </div>
    </article>
  );
}
