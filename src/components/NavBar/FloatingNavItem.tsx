import React from 'react';

import { NavLink } from 'react-router-dom';

type FloatingNavItemProps = {
  to: string;
  label: string;
  icon: string;
};

function FloatingNavItem({ to, label, icon }: FloatingNavItemProps) {
  return (
    <NavLink to={to} className="-translate-y-2 mx-1.5">
      {({ isActive }) => (
        <div className="h-[3.687rem] w-[3.687rem] flex flex-col items-center justify-center bg-nav-gradient rounded-full">
          <div className="h-6 w-6 translate-x-0.5">
            <img src={icon} alt={label} width="100%" height="100%" />
          </div>
          <span className="text-[0.625rem] leading-[150%] text-white">
            {label}
          </span>
        </div>
      )}
    </NavLink>
  );
}

export default FloatingNavItem;
