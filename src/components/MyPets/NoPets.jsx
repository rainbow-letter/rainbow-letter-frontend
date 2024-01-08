import React from 'react';

import { INFO_MESSAGES, USER_ACTIONS } from './constants';
import PetRegisterButton from './PetRegisterButton';

function NoPets() {
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
        <PetRegisterButton>{USER_ACTIONS.REGISTER}</PetRegisterButton>
      </section>
    </div>
  );
}

export default NoPets;
