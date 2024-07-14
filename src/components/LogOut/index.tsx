import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userActions } from 'store/user/user-slice';

import { removeToken, removeLoginTimestamp } from 'utils/localStorage';
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
    removeLoginTimestamp();
    clearSessionStorage();
    navigate('/');
  };

  return (
    <button
      className="flex items-center justify-between"
      type="button"
      onClick={() => handleLogout()}
    >
      {children}
    </button>
  );
}

export default LogOut;
