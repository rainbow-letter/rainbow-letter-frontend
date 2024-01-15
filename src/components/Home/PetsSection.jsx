/* eslint-disable */
import React from 'react';
import PetsBox from './PetsBox';
import LoginBox from './LoginBox';

import { INFO_MESSAGES } from './constants';

export default function PetsSection({ isLoggedIn }) {
  return (
    <section className="bg-white rounded-t-[15px] px-[18px] mt-[207px] z-20 relative">
      <h3 className="pt-[23px] pl-1.5 mb-5 text-solo-large">
        {INFO_MESSAGES.PETS_TITLE}
      </h3>
      {isLoggedIn ? <PetsBox /> : <LoginBox />}
    </section>
  );
}
