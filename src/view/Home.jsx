import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeToken } from '../store/user';

export default function Home() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Welcome Home!</p>
      {user.user ? (
        <button type="button" onClick={() => dispatch(removeToken())}>
          로그아웃
        </button>
      ) : (
        <Link to="/login">로그인하러</Link>
      )}
    </div>
  );
}
