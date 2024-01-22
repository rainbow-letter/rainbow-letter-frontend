import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import metaData from '../../utils/metaData';

function Layout() {
  const { pathname } = useLocation();
  const isHomeLayOut = pathname === '/' || false;

  useEffect(() => {
    metaData(pathname);
    return () => {
      metaData('default');
    };
  }, [pathname]);

  return (
    <div className="w-full h-full min-w-[360px] flex justify-center bg-white pb-28">
      <div className={`${isHomeLayOut ? 'px-0' : 'px-5'} w-[390px] bg-white`}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
