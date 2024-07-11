import { Navigate, Outlet } from 'react-router-dom';

import { getToken } from 'utils/localStorage';
import { getFromSessionStorage } from 'utils/sessionStorage';
import AdminAppBar from 'components/AppBar/AdminAppBar';

function AdminLayout() {
  const token = getToken();
  const isLoggedIn = !!token;
  const role = getFromSessionStorage('role');

  if (!isLoggedIn) return <Navigate to="/login" />;
  if (role !== 'ROLE_ADMIN') return <h1>관리자 전용 페이지입니다.</h1>;
  return (
    <div className="h-screen w-full px-4">
      <AdminAppBar />
      <Outlet />
    </div>
  );
}

export default AdminLayout;
