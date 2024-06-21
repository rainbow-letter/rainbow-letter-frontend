import React from 'react';

import LoginBox from 'components/Home/LoginBox';
import PetsBox from 'components/Home/PetsBox';

type Props = {
  isLoggedIn: boolean;
};

export default function PetsSection({ isLoggedIn }: Props) {
  return (
    <section className="relative z-20 mt-[11.5rem] rounded-t-2xl bg-white px-5 pb-[1.875rem] pt-9">
      {isLoggedIn ? <PetsBox /> : <LoginBox />}
    </section>
  );
}
