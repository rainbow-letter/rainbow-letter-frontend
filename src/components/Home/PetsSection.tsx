import React from 'react';

import LoginBox from 'components/Home/LoginBox';
import PetsBox from 'components/Home/PetsBox';

type Props = {
  isLoggedIn: boolean;
};

export default function PetsSection({ isLoggedIn }: Props) {
  return (
    <section className="mt-[11.5rem] px-5 pt-9 pb-[1.875rem] bg-white rounded-t-2xl z-20 relative">
      {isLoggedIn ? <PetsBox /> : <LoginBox />}
    </section>
  );
}
