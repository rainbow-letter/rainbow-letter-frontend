import React from 'react';

import home from 'assets/nav-home.svg';
import homeActive from 'assets/homeActive.svg';
import writing from 'assets/nav-writingLetter.svg';
import letterBox from 'assets/nav-letterBox.svg';
import letterBoxActive from 'assets/letterBoxActive.svg';
import petInfo from 'assets/nav-pet.svg';
import petInfoActive from 'assets/petInfoActive.svg';
import myInfo from 'assets/nav-my.svg';
import myInfoActive from 'assets/myInfoActive.svg';
import NavItem from 'components/NavBar/NavItem';
import FloatingNavItem from 'components/NavBar/FloatingNavItem';

function NavBar() {
  return (
    <nav className="fixed inset-x-0 bottom-0 flex justify-center pb-4 pt-1 bg-white z-20">
      <div className="flex min-w-[22.5rem] gap-x-5 px-7">
        <NavItem
          to="/letter-box"
          label="편지함"
          icon={letterBox}
          activeIcon={letterBoxActive}
        />
        <NavItem to="/home" label="홈" icon={home} activeIcon={homeActive} />
        <FloatingNavItem to="/write-letter" label="편지쓰기" icon={writing} />
        <NavItem
          to="/my-pets"
          label="아이정보"
          icon={petInfo}
          activeIcon={petInfoActive}
        />
        <NavItem
          to="/my-page"
          label="My"
          icon={myInfo}
          activeIcon={myInfoActive}
        />
      </div>
    </nav>
  );
}

export default NavBar;
