import React from 'react';

function Layout({ className, children }) {
  return (
    <div className="w-full h-screen min-w-[360px] flex justify-center">
      <div className={`${className} w-[360px] bg-white px-6 pt-7`}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
