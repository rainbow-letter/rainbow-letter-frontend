import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import metaData from 'utils/metaData';

function Layout() {
  const { pathname } = useLocation();
  const isHomeLayOut = pathname === '/home' || pathname === '/' || false;

  useEffect(() => {
    metaData(pathname);
    return () => {
      metaData('default');
    };
  }, [pathname]);

  return (
    <div className="flex size-full min-w-[22.5rem] justify-center bg-white">
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
