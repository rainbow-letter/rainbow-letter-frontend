import React from 'react';
import { useLocation } from 'react-router-dom';

function Layout({ className, children }) {
  const location = useLocation();
  const isHomeLayOut = location.pathname === '/' || false;
  const styles = className || '';

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
