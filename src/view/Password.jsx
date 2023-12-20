/* eslint-disable */
import { React, useEffect, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import UserInput from '../components/Login/UserInput';
import { getToken } from '../store/user';
import { updatePassword } from '../api/user';

import { BUTTON_STYLE } from '../components/Login/constants';

const data = {
  password: null,
  newPassword: 'user1234',
};

export default function Password() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToken(searchParams.get('token')));
  }, [searchParams]);

  const onClickUpdatePasswordButton = useCallback(async () => {
    try {
      await updatePassword(data);
      navigate('/');
    } catch (error) {
      console.log(error.response.data);
    }
  }, []);

  return (
    <main className="flex flex-col justify-center h-screen">
      <section>
        <h2 className="text-heading-2 text-center">비밀번호 변경하기</h2>
        <p className="text-solo-medium text-gray-1 mt-4 text-center">
          새로운 비밀번호를 입력해주세요
        </p>
      </section>
      <section>
        <h3 className="mb-3 mt-8">새 비밀번호</h3>
        <UserInput className="mb-5" placeholder="비밀번호를 입력해주세요" />
        <h3 className="mb-3 mt-8">새 비밀번호 확인</h3>
        <UserInput placeholder="비밀번호를 입력해주세요" />
        <button
          type="submit"
          onClick={() => onClickUpdatePasswordButton()}
          className={`${BUTTON_STYLE} bg-orange-400 text-heading-3 text-white mt-8`}
        >
          변경하기
        </button>
      </section>
    </main>
  );
}
