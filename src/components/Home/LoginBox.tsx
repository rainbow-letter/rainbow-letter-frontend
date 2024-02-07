import React from 'react';
import { Link } from 'react-router-dom';

import { INFO_MESSAGES, USER_ACTIONS } from 'components/Home/constants';

export default function LoginBox() {
  return (
    <article className="mt-5 border rounded-[15px] border-gray-3 px-[17px] flex flex-col items-center">
      <h4 className="text-heading-3 mt-[30px] mb-[13px]">
        {INFO_MESSAGES.LOGIN_ABSENT}
      </h4>
      <p>{INFO_MESSAGES.INFOMATION_ABOUT_LETTER_WRITING_METHOD}</p>
      <div className="flex w-full mt-7 mb-4 text-solo-large gap-4">
        <Link to="/login" className="w-full">
          <button
            type="button"
            className="w-full py-5 px-[22px] bg-orange-400 text-white rounded-[15px]"
          >
            {USER_ACTIONS.LOGIN}
          </button>
        </Link>
        <Link to="/sign-up" className="w-full">
          <button
            type="button"
            className="w-full py-5 px-[22px] text-orange-400 border-orange-400 border-2 rounded-[15px]"
          >
            {USER_ACTIONS.SIGH_UP}
          </button>
        </Link>
      </div>
    </article>
  );
}
