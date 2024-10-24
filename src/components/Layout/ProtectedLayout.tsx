import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { getToken, removeToken } from 'utils/localStorage';
import NavBar from 'components/NavBar';
import AppBar from 'components/AppBar';

function ProtectedLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = getToken();
  const isLoggedIn = !!token;

  const isShowAppBar = location.pathname !== '/my-page/password';

  useEffect(() => {
    if (!isLoggedIn) {
      removeToken();
      navigate('/sign-up', { replace: true });
    }
  }, [isLoggedIn, location]);

  return (
    <>
      {isShowAppBar && <AppBar />}
      <div className="pb-28">
        <Outlet />
      </div>
      <NavBar />
    </>
  );
}

export default ProtectedLayout;
