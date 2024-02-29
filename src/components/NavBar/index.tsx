import React from 'react';
import { NavLink } from 'react-router-dom';

import home from '../../assets/home.svg';
import homeActive from '../../assets/homeActive.svg';
import writing from '../../assets/writing.svg';
import writingActive from '../../assets/writingActive.svg';
import letterBox from '../../assets/letterBox.svg';
import letterBoxActive from '../../assets/letterBoxActive.svg';
import petInfo from '../../assets/petInfo.svg';
import petInfoActive from '../../assets/petInfoActive.svg';
import myInfo from '../../assets/myInfo.svg';
import myInfoActive from '../../assets/myInfoActive.svg';

const navItems = [
  { to: '/home', label: '홈', icon: home, activeIcon: homeActive },
  {
    to: '/write-letter',
    label: '편지쓰기',
    icon: writing,
    activeIcon: writingActive,
  },
  {
    to: '/letter-box',
    label: '편지함',
    icon: letterBox,
    activeIcon: letterBoxActive,
  },
  {
    to: '/my-pets',
    label: '아이 정보',
    icon: petInfo,
    activeIcon: petInfoActive,
  },
  {
    to: '/my-page',
    label: '마이페이지',
    icon: myInfo,
    activeIcon: myInfoActive,
  },
];

function NavBar() {
  return (
    <nav className="h-[6.25rem] fixed inset-x-0 bottom-0 flex justify-center pt-5 pb-6 bg-white z-20">
      <ul className="flex justify-between w-full text-gray-2 text-xs leading-6 max-w-[21rem]">
        {navItems.map(({ to, label, icon, activeIcon }) => (
          <li key={to} className="flex-1">
            <NavLink
              to={to}
              className="flex flex-col items-center justify-center space-y-[0.313rem]"
            >
              {({ isActive }) => (
                <>
                  <img
                    className="h-8 w-8"
                    src={isActive ? activeIcon : icon}
                    alt={label}
                    width={32}
                    height={32}
                  />
                  <span
                    className={`${
                      isActive ? 'text-orange-400' : 'text-gray-2'
                    }`}
                  >
                    {label}
                  </span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
