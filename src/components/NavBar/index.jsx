import React from 'react';
import { NavLink } from 'react-router-dom';

import writing from '../../assets/writing.svg';
import letterBox from '../../assets/letterBox.svg';
import homeActive from '../../assets/homeActive.svg';
import petInfo from '../../assets/petInfo.svg';
import myInfo from '../../assets/myInfo.svg';

// TODO: active icon 추가
const navItems = [
  {
    to: '/write-letter',
    label: '편지쓰기',
    icon: writing,
    activeIcon: writing,
  },
  {
    to: '/letter-box',
    label: '편지함',
    icon: letterBox,
    activeIcon: letterBox,
  },
  { to: '/home', label: '홈', icon: homeActive, activeIcon: homeActive },
  {
    to: '/my-pets',
    label: '아이 정보',
    icon: petInfo,
    activeIcon: petInfo,
  },
  {
    to: '/my-page',
    label: '마이페이지',
    icon: myInfo,
    activeIcon: myInfo,
  },
];

function NavBar() {
  return (
    <nav className=" h-[100px] sticky bottom-0 flex w-full pt-5 pb-6 mt-5 bg-white">
      <ul className="flex justify-between w-full text-gray-2 text-xs leading-6">
        {navItems.map(({ to, label, icon, activeIcon }) => (
          <li key={to} className="flex-1">
            <NavLink
              to={to}
              className="flex flex-col items-center justify-center space-y-2.5"
            >
              {({ isActive }) => (
                <>
                  <img
                    className="h-7 w-7"
                    src={isActive ? activeIcon : icon}
                    alt={label}
                  />
                  <span>{label}</span>
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
