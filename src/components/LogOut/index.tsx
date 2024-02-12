import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userActions } from 'store/user-slice';

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
    navigate('/home');
  };

  return (
    <button
      className="flex justify-between items-center"
      type="button"
      onClick={() => handleLogout()}
    >
      {children}
    </button>
  );
}

export default LogOut;
