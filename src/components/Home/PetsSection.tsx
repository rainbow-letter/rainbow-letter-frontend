import React from 'react';

import LoginBox from 'components/Home/LoginBox';
import PetsBox from 'components/Home/PetsBox';
import { INFO_MESSAGES } from 'components/Home/constants';

type Props = {
  isLoggedIn: boolean;
};

export default function PetsSection({ isLoggedIn }: Props) {
  return (
    <section className="bg-white rounded-t-2xl px-[1.562rem] mt-[12.3rem] z-20 relative">
      <h3 className="pt-[1.437rem] mb-5 text-solo-large font-semibold">
        {INFO_MESSAGES.PETS_TITLE}
      </h3>
      {isLoggedIn ? <PetsBox /> : <LoginBox />}
    </section>
  );
}
