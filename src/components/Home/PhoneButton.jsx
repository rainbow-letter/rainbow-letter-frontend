import React from 'react';

import phone from '../../assets/Phone.svg';

export default function PhoneButton() {
  return (
    <article className="px-[18px] py-4 my-[34px] flex justify-center gap-2.5 bg-orange-50 text-solo-label text-orange-400 rounded-[15px]">
      <img src={phone} alt="phone" />
      <p>자살예방 상담전화 109</p>
    </article>
  );
}
