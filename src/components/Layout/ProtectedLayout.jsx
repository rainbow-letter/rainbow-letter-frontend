import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import Navbar from '../Navbar';

function ProtectedLayout({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default ProtectedLayout;
