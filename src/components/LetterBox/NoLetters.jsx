import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';
import { INFO_MESSAGES, USER_ACTIONS } from './constants';

export default function NoLetters() {
  const navigate = useNavigate();

  return (
    <div className="h-[88vh] flex justify-center items-center">
      <section className="w-full flex flex-col gap-y-12 text-center">
        <div className="flex flex-col">
          <span className="p-2.5 text-heading-3">
            {INFO_MESSAGES.SENT_LETTER_ABSENT}
          </span>
          <span className="p-2.5 text-solo-medium">
            {INFO_MESSAGES.SUGGEST_LETTER_REGISTRATION}
          </span>
        </div>
        <Button onClick={() => navigate('/letter/write')}>
          {USER_ACTIONS.GO_TO_LETTERS}
        </Button>
      </section>
    </div>
  );
}
