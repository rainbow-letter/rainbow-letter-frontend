import React from 'react';

import { PHONE_MESSAGE } from 'components/Home/constants';
import phone from '../../assets/Phone.svg';

export default function PhoneButton() {
  const handlePhoneButtonClick = () => {
    document.location.href = 'tel:109';
  };

  return (
    <section className="h-[3.125rem] px-7 mb-8">
      <button
        type="button"
        onClick={() => handlePhoneButtonClick()}
        className="w-full h-full flex justify-center items-center gap-x-2.5 py-4 bg-orange-50 text-solo-label text-orange-400 font-bold rounded-2xl"
      >
        <div className="h-4 w-4">
          <img src={phone} alt="phone" width="100%" height="100%" />
        </div>
        <p>{PHONE_MESSAGE}</p>
      </button>
    </section>
  );
}
