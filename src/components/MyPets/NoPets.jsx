import React from 'react';
import { useNavigate } from 'react-router-dom';

import { INFO_MESSAGES } from './constants';
import Button from '../Button';

function NoPets() {
  const navigate = useNavigate();

  return (
    <div className="h-[88vh] flex justify-center items-center">
      <section className="w-full flex flex-col gap-y-12 text-center">
        <div className="flex flex-col">
          <span className="p-2.5 text-heading-3">
            {INFO_MESSAGES.LETTER_RECIPIENT_ABSENT}
          </span>
          <span className="p-2.5 text-solo-medium">
            {INFO_MESSAGES.SUGGEST_PET_REGISTRATION}
          </span>
        </div>
        <Button value="등록하기" onClick={() => navigate('register')} />
      </section>
    </div>
  );
}

export default NoPets;
