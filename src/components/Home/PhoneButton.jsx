import React from 'react';

import phone from '../../assets/Phone.svg';
import { PHONE_MESSAGE } from './constants';

export default function PhoneButton() {
  const onPhoneButtonclick = () => {
    document.location.href = 'tel:109';
  };
  return (
    <section className="px-[25px] mb-[38px] ">
      <button
        type="button"
        onClick={() => onPhoneButtonclick()}
        className="w-full py-4 flex justify-center gap-2.5 bg-orange-50 text-solo-label text-orange-400 font-semibold rounded-[15px]"
      >
        <img src={phone} alt="phone" />
        <p>{PHONE_MESSAGE}</p>
      </button>
    </section>
  );
}
