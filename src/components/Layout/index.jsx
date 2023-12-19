import React from 'react';

function Layout({ className, children }) {
  return (
    <div className="w-full h-full min-w-[360px] pb-10 flex justify-center">
      <div className={`${className} w-[390px] bg-white px-6 pt-7`}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
