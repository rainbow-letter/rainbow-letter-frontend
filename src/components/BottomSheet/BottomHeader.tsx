import React from 'react';

import Logo from '../../assets/Logo_256px.png';
import CancelImage from '../../assets/ph_x-bold.svg';

export default function BottomHeader({ onClick }: any) {
  return (
    <div className="flex justify-center py-8">
      <button
        type="button"
        onClick={onClick}
        className="absolute top-4 right-4"
      >
        <img src={CancelImage} alt="cancel" />
      </button>
      <img src={Logo} alt="logo" className="w-[4rem] border rounded-2xl p-2" />
    </div>
  );
}
