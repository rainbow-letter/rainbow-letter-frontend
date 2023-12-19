import React from 'react';
import { useLocation } from 'react-router-dom';

import navConfig from './constants';
import chevronLeft from '../../assets/chevronLeft.svg';

function Navbar() {
  const location = useLocation();
  const config = navConfig[location.pathname];

  if (!config) {
    return null;
  }

  const { title, actionName, action } = config;

  return (
    <section className="h-[70px] pt-6 pb-5 flex justify-between border-b border-b-gray-1">
      <div className="flex gap-x-3">
        <div>
          <img src={chevronLeft} alt="left" />
        </div>
        <div className="text-gray-1 text-heading-3">{title}</div>
      </div>
      {actionName && (
        <button
          className="line-height-[100%] text-sm text-heading-black underline"
          type="button"
          onClick={action}
        >
          {actionName}
        </button>
      )}
    </section>
  );
}

export default Navbar;
