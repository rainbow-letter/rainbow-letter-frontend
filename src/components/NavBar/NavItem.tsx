import React from 'react';
import { NavLink } from 'react-router-dom';

type NavItemProps = {
  to: string;
  label: string;
  icon: string;
  activeIcon: string;
};

function NavItem({ to, label, icon, activeIcon }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className="flex flex-col items-center justify-center space-y-1.5"
    >
      {({ isActive }) => (
        <>
          <div className="h-[1.625rem] w-[1.625rem]">
            <img
              className="h-8 w-8"
              src={isActive ? activeIcon : icon}
              alt={label}
              width="100%"
              height="100%"
            />
          </div>
          <span
            className={`text-[0.625rem] leading-[150%] ${
              isActive ? 'text-orange-400' : 'text-gray-2'
            }`}
          >
            {label}
          </span>
        </>
      )}
    </NavLink>
  );
}

export default NavItem;
