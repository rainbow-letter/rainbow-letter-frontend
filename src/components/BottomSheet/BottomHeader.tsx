import React from 'react';

import Logo from '../../assets/logo_white.png';
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
      <img src={Logo} alt="logo" />
    </div>
  );
}
