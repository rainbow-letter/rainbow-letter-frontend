import React from 'react';
import { Link } from 'react-router-dom';

import { INFO_MESSAGES, USER_ACTIONS } from './constants';

export default function NoPets() {
  return (
    <article className="border rounded-[15px] border-gray-3 px-[17px] flex flex-col items-center">
      <h4 className="text-heading-3 mt-[30px] mb-[13px]">
        {INFO_MESSAGES.PETS_ABSENT}
      </h4>
      <p>{INFO_MESSAGES.SUGGEST_PETS_REGISTRATION}</p>
      <div className="flex w-full mt-7 mb-4 text-solo-large gap-4">
        <Link to="/my-pets/register" className="w-full">
          <button
            type="button"
            className="w-full py-5 px-[22px] bg-orange-400 text-white rounded-[15px]"
          >
            {USER_ACTIONS.PEST_REGISTRATION}
          </button>
        </Link>
      </div>
    </article>
  );
}
