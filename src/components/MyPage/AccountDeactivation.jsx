import React from 'react';

import check from '../../assets/check.svg';
import {
  USER_ACTIONS,
  ACCOUNT_DEACTIVATION,
  ACCOUNT_DEACTIVATION_GUIDELINES,
} from './constants';

function AccountDeactivation() {
  return (
    <div className="flex flex-col gap-[159px] py-5">
      <section className="p-7 bg-gray-2 rounded-2xl">
        <span className="text-solo-large">
          {ACCOUNT_DEACTIVATION.GUIDELINES_TITLE}
        </span>
        <ul className="p-[10px] list-disc text-body-small text-gray-1 space-y-[6px]">
          {ACCOUNT_DEACTIVATION_GUIDELINES.map((guideline) => (
            <li key={guideline.ID}>{guideline.CONTENT}</li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col gap-[22px]">
        <button type="button" className="flex gap-2">
          <div className="w-6 h-6 bg-orange-400 rounded">
            <img src={check} alt="check" />
          </div>
          <div>
            <span className="font-semibold text-body-medium text-gray-1">
              {ACCOUNT_DEACTIVATION.CONFIRM_MESSAGE}
            </span>
          </div>
        </button>
        <button
          className="w-full h-[70px] bg-orange-400 rounded-2xl"
          type="submit"
          onClick={() => {
            // TODO: 회원탈퇴 요청 및 페이지 이동
          }}
        >
          <span className="text-white text-heading-3">
            {USER_ACTIONS.LEAVE}
          </span>
        </button>
      </section>
    </div>
  );
}

export default AccountDeactivation;
