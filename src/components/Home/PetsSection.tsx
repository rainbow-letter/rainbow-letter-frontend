import React from 'react';

import LoginBox from 'components/Home/LoginBox';
import PetsBox from 'components/Home/PetsBox';
import { INFO_MESSAGES } from 'components/Home/constants';

type Props = {
  isLoggedIn: boolean;
};

export default function PetsSection({ isLoggedIn }: Props) {
  return (
    <section className="bg-white rounded-t-[15px] px-[25px] mt-[207px] z-20 relative">
      <h3 className="pt-[23px] mb-5 text-solo-large font-semibold">
        {INFO_MESSAGES.PETS_TITLE}
      </h3>
      {isLoggedIn ? <PetsBox /> : <LoginBox />}
    </section>
  );
}
