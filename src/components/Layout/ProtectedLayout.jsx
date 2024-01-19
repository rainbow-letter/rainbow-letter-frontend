/* eslint-disable import/no-cycle */
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import AppBar from '../AppBar';
import NavBar from '../NavBar';

function ProtectedLayout({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
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
