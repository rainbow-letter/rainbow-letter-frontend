import React from 'react';

import logo from '../../assets/logo.png';

export default function LogoBar() {
  return (
    <header>
      <img src={logo} width={100} height={50} alt="logo" className="mx-auto" />
    </header>
  );
}
