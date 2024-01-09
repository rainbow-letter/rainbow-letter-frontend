import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeToken } from '../store/user';

export default function Home() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <p>Welcome Home!</p>
      {user.token ? (
        <div className="flex flex-col">
          <Link to="/my-page">마이페이지</Link>
          <Link to="/my-pets">내 반려동물</Link>
          <Link to="/letter-box">편지함</Link>
          <Link to="/letter/write">편지쓰기</Link>
          <button type="button" onClick={() => dispatch(removeToken())}>
            로그아웃
          </button>
        </div>
      ) : (
        <Link to="/login">로그인하러</Link>
      )}
    </div>
  );
}
