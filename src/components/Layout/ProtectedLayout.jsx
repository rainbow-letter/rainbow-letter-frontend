import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import AppBar from '../AppBar';

function ProtectedLayout({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
}

export default ProtectedLayout;
