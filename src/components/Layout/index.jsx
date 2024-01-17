import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import metaData from '../../utils/metaData';

function Layout({ className }) {
  const { pathname } = useLocation();
  const isHomeLayOut = pathname === '/' || false;

  const styles = className || '';

  useEffect(() => {
    metaData(pathname);
    return () => {
      metaData('default');
    };
  }, [pathname]);

  return (
    <div className="w-full h-full min-w-[360px] flex justify-center bg-white ">
      <div
        className={`${styles} ${
          isHomeLayOut ? 'px-0' : 'px-3'
        } min-h-screen w-[390px] bg-white`}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
