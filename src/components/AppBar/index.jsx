import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

import appBarConfig from './constants';
import normalizePath from '../../utils/normalizers';
import chevronLeft from '../../assets/chevronLeft.svg';

function AppBar() {
  const location = useLocation();
  const normalizedPath = normalizePath(location.pathname);
  const params = Object.keys(useParams())[0];
  const config = appBarConfig[params] || appBarConfig[normalizedPath];

  if (!config) {
    return null;
  }

  const navigate = useNavigate();
  const { title } = config;

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="sticky top-0 py-6 flex justify-between items-center bg-white z-10">
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

export default AppBar;
