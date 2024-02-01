import React from 'react';
import { Link } from 'react-router-dom';

import chevronRight from '../../assets/chevronRight.svg';

function MenuItemLink({ to, label }) {
  return (
    <Link to={to} className="flex justify-between items-center">
      <div className="p-2.5 text-solo-large">{label}</div>
      <div>
        <img src={chevronRight} alt="chevronRight" />
      </div>
    </Link>
  );
}

export default MenuItemLink;
