/* eslint-disable */
import { React, useState, useEffect, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import UserInput from '../components/Login/UserInput';
import SubmitButton from '../components/Login/SubmitButton';
import { validatePasswordMatch, validatePassword } from '../utils/validators';
import { getToken, removeToken } from '../store/user';
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
      dispatch(removeToken());
      navigate('/');
    } catch (error) {
      if (error.response && error.response.data.code === 'UN_AUTHORIZE') {
        alert('토큰 유효기간이 지났습니다.');
        dispatch(removeToken());
        navigate('/');
      }
      setErrorData({
        ...errorData,
        type: error.message,
        message: ERROR_MESSAGE[error.message],
      });
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
        <p className="text-solo-medium text-gray-1 text-center mt-[18px]">
          새로운 비밀번호를 입력해주세요
        </p>
      </section>
      <section className="mt-[58px]">
        <label htmlFor="newPassword" className="block mb-4">
          새 비밀번호
        </label>
        <UserInput
          placeholder="비밀번호를 입력해주세요"
          type="password"
          id="newPassword"
          value={userInfo.password || ''}
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
          isNotValid={errorData && errorData.type === 'NOT_VALID_FORM'}
          errorMessage={errorData && errorData.message}
        />
        <label htmlFor="newPasswordChcek" className="block mb-4 mt-[53px]">
          새 비밀번호 확인
        </label>
        <UserInput
          placeholder="비밀번호를 입력해주세요"
          type="password"
          id="newPasswordChcek"
          value={userInfo.newPassword || ''}
          onChange={(e) =>
            setUserInfo({ ...userInfo, newPassword: e.target.value })
          }
          isNotValid={errorData && errorData.type === 'NOT_MATCH'}
          errorMessage={errorData && errorData.message}
        />
        <SubmitButton
          onclick={() => onClickUpdatePasswordButton()}
          value="변경하기"
          className={`${BUTTON_STYLE} bg-orange-400 text-heading-3 text-white py-[22px] mt-[55px]`}
        />
      </section>
    </main>
  );
}
