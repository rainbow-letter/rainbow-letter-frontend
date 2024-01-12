import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import AppBar from '../AppBar';
import NavBar from '../NavBar';

function ProtectedLayout({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <AppBar />
      <Outlet />
      <NavBar />
    </>
  );
}

export default ProtectedLayout;
