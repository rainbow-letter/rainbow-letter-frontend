import React from 'react';
import { Link } from 'react-router-dom';

import chevronRight from '../../assets/chevronRight.svg';

type Props = {
  to: string;
  label: string;
};

function MenuItemLink({ to, label }: Props) {
  return (
    <Link to={to} className="flex items-center justify-between">
      <div className="p-2.5 text-solo-large">{label}</div>
      <div>
        <img src={chevronRight} alt="chevronRight" />
      </div>
    </Link>
  );
}

export default MenuItemLink;
