import React from 'react';

function Layout({ className, children }) {
  const styles = className || '';

  return (
    <div className="w-full h-full min-w-[360px] flex justify-center bg-white">
      <div className={`${styles} w-[390px] bg-white px-3`}>{children}</div>
    </div>
  );
}

export default Layout;
