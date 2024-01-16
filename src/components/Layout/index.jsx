/* eslint-disable */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import metaData from '../../utils/metaData';

function Layout({ className, children }) {
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
        {children}
      </div>
    </div>
  );
}

export default Layout;
