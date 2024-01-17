import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AppBar from '../AppBar';

function AdminLayout({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  const role = useSelector((state) => state.user.role);

  if (!role) {
    return <h1>관리자 전용 페이지입니다.</h1>;
  }
  return (
    <div className="p-4">
      <AppBar />
      <Outlet />
    </div>
  );
}

export default AdminLayout;
