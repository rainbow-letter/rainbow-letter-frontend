import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import AppBar from '../AppBar';
import NavBar from '../NavBar';
import { getToken } from '../../utils/localStorage';

function ProtectedLayout() {
  const token = getToken();
  const isLoggedIn = !!token;

  if (!isLoggedIn) {
    return <Navigate to="/sign-up" replace />;
  }

  return (
    <>
      <AppBar />
      <div className="pb-28">
        <Outlet />
      </div>
      <NavBar />
    </>
  );
}

export default ProtectedLayout;
