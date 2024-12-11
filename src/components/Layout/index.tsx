import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { RootState } from 'store';

import metaData from 'utils/metaData';

function Layout() {
  const { pathname } = useLocation();
  const { lng } = useSelector((state: RootState) => state.common);
  const isHomeLayOut =
    pathname === '/' ||
    pathname === '/donate' ||
    pathname === '/letter-box' ||
    pathname === '/contents' ||
    false;

  useEffect(() => {
    metaData(pathname);
    return () => {
      metaData('default');
    };
  }, [pathname]);

  return (
    <div
      className={`${lng === 'ko' ? '' : 'font-HelveticaNowDisplay'} flex size-full min-w-[22.5rem] justify-center bg-white`}
    >
      <div
        className={`${
          isHomeLayOut ? 'overflow-hidden px-0' : 'px-5'
        } w-full max-w-[24.375rem] bg-white`}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
