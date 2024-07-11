import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userActions } from 'store/user/user-slice';

import { removeToken } from 'utils/localStorage';
import { clearSessionStorage } from 'utils/sessionStorage';

type LogOutProps = {
  children: ReactNode;
};

function LogOut({ children }: LogOutProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userActions.logOut());
    removeToken();
    clearSessionStorage();
    navigate('/');
  };

  return (
    <button
      className="flex items-center justify-between"
      onClick={() => handleLogout()}
      type="button"
    >
      {children}
    </button>
  );
}

export default LogOut;
