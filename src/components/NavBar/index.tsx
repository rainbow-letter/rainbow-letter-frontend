import { ReactComponent as letterBox } from 'assets/nav-letterBox.svg';
import { ReactComponent as HomeIcon } from 'assets/nav-home.svg';
import writing from 'assets/nav-writingLetter.svg';
import { ReactComponent as petInfo } from 'assets/nav-pet.svg';
import { ReactComponent as myInfo } from 'assets/nav-my.svg';

import NavItem from 'components/NavBar/NavItem';
import FloatingNavItem from 'components/NavBar/FloatingNavItem';

function NavBar() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 flex justify-center bg-white py-1.5">
      <div className="flex w-[390px] min-w-[22.5rem] justify-between gap-x-1.5 px-6">
        <NavItem Icon={HomeIcon} label="홈" to="/" />
        <NavItem Icon={letterBox} label="편지함" to="/letter-box" />
        <FloatingNavItem icon={writing} label="편지쓰기" to="/write-letter" />
        <NavItem
          Icon={petInfo}
          label="아이정보"
          to="/my-pets"
          useStroke={false}
        />
        <NavItem Icon={myInfo} label="My" to="/my-page" />
      </div>
    </nav>
  );
}

export default NavBar;
