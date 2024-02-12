import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar';
import { getToken } from 'utils/localStorage';
import { getFromSessionStorage } from 'utils/sessionStorage';

function AdminLayout() {
  const token = getToken();
  const isLoggedIn = !!token;
  const role = getFromSessionStorage('role');

  if (!isLoggedIn) return <Navigate to="/login" />;
  if (role !== 'ROLE_ADMIN') return <h1>관리자 전용 페이지입니다.</h1>;
  return (
    <div className="w-full h-screen px-4">
      <AppBar />
      <Outlet />
    </div>
  );
}

export default AdminLayout;
