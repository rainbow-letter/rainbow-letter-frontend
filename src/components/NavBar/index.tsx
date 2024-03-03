import React from 'react';

import { ReactComponent as letterBox } from 'assets/nav-letterBox.svg';
import { ReactComponent as HomeIcon } from 'assets/nav-home.svg';
import writing from 'assets/nav-writingLetter.svg';
import { ReactComponent as petInfo } from 'assets/nav-pet.svg';
import { ReactComponent as myInfo } from 'assets/nav-my.svg';

import NavItem from 'components/NavBar/NavItem';
import FloatingNavItem from 'components/NavBar/FloatingNavItem';

function NavBar() {
  return (
    <nav className="fixed inset-x-0 bottom-0 flex justify-center py-1.5 bg-white z-20">
      <div className="min-w-[22.5rem] w-[390px] flex justify-between gap-x-1.5 px-6">
        <NavItem to="/home" label="홈" Icon={HomeIcon} />
        <NavItem to="/letter-box" label="편지함" Icon={letterBox} />
        <FloatingNavItem to="/write-letter" label="편지쓰기" icon={writing} />
        <NavItem
          to="/my-pets"
          label="아이정보"
          Icon={petInfo}
          useStroke={false}
        />
        <NavItem to="/my-page" label="My" Icon={myInfo} />
      </div>
    </nav>
  );
}

export default NavBar;
