/* eslint-disable */
import { React, useState, useEffect, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import UserInput from '../components/Login/UserInput';
import { validatePasswordMatch, validatePassword } from '../utils/validators';
import { getToken } from '../store/user';
import { updatePassword } from '../api/user';

import { BUTTON_STYLE, ERROR_MESSAGE } from '../components/Login/constants';

export default function Password() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [userInfo, setUserInfo] = useState({
    password: null,
    newPassword: '',
  });
  const [errorData, setErrorData] = useState({
    type: '',
    message: '',
  });

  useEffect(() => {
    dispatch(getToken(searchParams.get('token')));
  }, [searchParams]);

  const onClickUpdatePasswordButton = useCallback(async () => {
    try {
      isCheckProperPassword();
      await updatePassword(userInfo);
      setErrorData(null);
      navigate('/');
    } catch (error) {
      setErrorData({
        ...errorData,
        type: error.message,
        message: ERROR_MESSAGE[error.message],
      });
      // TODO: 인증 실패 예외처리 있으면 적용하기.
      // if (!error.response) {}
    }
  }, [userInfo, errorData]);

  const isCheckProperPassword = () => {
    const { password, newPassword } = userInfo;
    if (!validatePassword(password)) {
      throw new Error('NOT_VALID_FORM');
    }
    if (!validatePasswordMatch(password, newPassword)) {
      throw new Error('NOT_MATCH');
    }
  };

  return (
    <main className="flex flex-col justify-center h-screen">
      <section>
        <h2 className="text-heading-2 text-center">비밀번호 변경하기</h2>
        <p className="text-solo-medium text-gray-1 text-center">
          새로운 비밀번호를 입력해주세요
        </p>
      </section>
      <section>
        <h3>새 비밀번호</h3>
        <UserInput
          placeholder="비밀번호를 입력해주세요"
          type="password"
          value={userInfo.password || ''}
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
          isNotValid={errorData && errorData.type === 'NOT_VALID_FORM'}
          errorMessage={errorData && errorData.message}
        />
        <h3>새 비밀번호 확인</h3>
        <UserInput
          placeholder="비밀번호를 입력해주세요"
          type="password"
          value={userInfo.newPassword || ''}
          onChange={(e) =>
            setUserInfo({ ...userInfo, newPassword: e.target.value })
          }
          isNotValid={errorData && errorData.type === 'NOT_MATCH'}
          errorMessage={errorData && errorData.message}
        />
        <button
          type="submit"
          onClick={() => onClickUpdatePasswordButton()}
          className={`${BUTTON_STYLE} bg-orange-400 text-heading-3 text-white py-[22px]`}
        >
          변경하기
        </button>
      </section>
    </main>
  );
}
