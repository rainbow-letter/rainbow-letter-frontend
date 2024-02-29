import React, { useEffect } from 'react';
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
    <div className="w-full h-full min-w-[22.5rem] flex justify-center bg-white">
      <div
        className={`${
          isHomeLayOut ? 'px-0 overflow-hidden' : 'px-5'
        } max-w-[24.375rem] w-full bg-white`}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
