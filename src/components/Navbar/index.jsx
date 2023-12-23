import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import navConfig from './constants';
import chevronLeft from '../../assets/chevronLeft.svg';

function Navbar() {
  const location = useLocation();
  const config = navConfig[location.pathname];

  if (!config) {
    return null;
  }

  const navigate = useNavigate();
  const { title } = config;

  function handleBack() {
    navigate(-1);
  }

  return (
    <header className="py-[10px] flex justify-between items-center">
      <section className="flex flex-1 justify-start">
        <button type="button" onClick={handleBack}>
          <img src={chevronLeft} alt="left" />
        </button>
      </section>
      <section className="flex-3 text-center text-solo-large">{title}</section>
      <section className="flex flex-1 justify-end" />
    </header>
  );
}

export default Navbar;
