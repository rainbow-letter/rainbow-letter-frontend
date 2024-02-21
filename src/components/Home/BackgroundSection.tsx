import React from 'react';

import background from '../../assets/backgroundImage.png';

export default function BackgroundSection() {
  return (
    <section>
      <img
        src={background}
        alt="background"
        className="absolute w-[24.375rem] h-[14rem]"
      />
    </section>
  );
}
