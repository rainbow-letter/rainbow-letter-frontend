import { React, useState, useEffect, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { removeToken, saveToken } from '../utils/localStorage';
import UserInput from '../components/Login/UserInput';
import SubmitButton from '../components/Login/SubmitButton';
import { validatePasswordMatch, validatePassword } from '../utils/validators';
import { updatePassword } from '../api/user';

import {
  ERROR_MESSAGE,
  UPDATE_PASSWORD_MESSAGE,
} from '../components/Login/constants';

export default function Password() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [userInfo, setUserInfo] = useState({
    password: '',
    newPassword: '',
  });
  const [errorData, setErrorData] = useState({
    type: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    saveToken(searchParams.get('token'));
  }, [searchParams]);

  const isCheckProperPassword = () => {
    const { password, newPassword } = userInfo;
    if (!validatePassword(password)) {
      throw new Error('NOT_VALID_PASSWORD');
    }
    if (!validatePasswordMatch(password, newPassword)) {
      throw new Error('NOT_MATCH');
    }
  };

  const onFinishUpdate = (isSuccess) => {
    if (isSuccess) {
      setErrorData(null);
    }

    removeToken();
    navigate('/home');
  };

  const onClickUpdatePasswordButton = useCallback(async () => {
    try {
      setIsLoading(true);
      isCheckProperPassword();
      await updatePassword({
        password: null,
        newPassword: userInfo.newPassword,
      });
      onFinishUpdate(true);
    } catch (error) {
      if (error.response && error.response.data.code === 'UN_AUTHORIZE') {
        alert('토큰 유효기간이 지났습니다.');
        onFinishUpdate(false);
      }
      setErrorData({
        ...errorData,
        type: error.message,
        message: ERROR_MESSAGE[error.message],
      });
    } finally {
      setIsLoading(false);
    }
  }, [userInfo, errorData]);

  return (
    <main className="flex flex-col justify-center h-screen">
      <section>
        <h2 className="text-heading-2 text-center">
          {UPDATE_PASSWORD_MESSAGE.TITLE}
        </h2>
        <p className="text-solo-medium text-gray-1 text-center mt-[18px]">
          {UPDATE_PASSWORD_MESSAGE.DESCRIPTION}
        </p>
      </section>
      <section className="mt-[58px]">
        <label htmlFor="newPassword" className="block mb-4">
          {UPDATE_PASSWORD_MESSAGE.NEW_PASSWORD}
        </label>
        <UserInput
          placeholder="비밀번호를 입력해주세요"
          type="password"
          id="newPassword"
          value={userInfo.password || ''}
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
          isNotValid={errorData && errorData.type === 'NOT_VALID_PASSWORD'}
          errorMessage={errorData && errorData.message}
        />
        <label htmlFor="newPasswordCheck" className="block mb-4 mt-[53px]">
          {UPDATE_PASSWORD_MESSAGE.NEW_PASSWORD_CONFIRM}
        </label>
        <UserInput
          placeholder="비밀번호를 입력해주세요"
          type="password"
          id="newPasswordCheck"
          value={userInfo.newPassword || ''}
          onChange={(e) =>
            setUserInfo({ ...userInfo, newPassword: e.target.value })
          }
          isNotValid={errorData && errorData.type === 'NOT_MATCH'}
          errorMessage={errorData && errorData.message}
        />
        <SubmitButton
          disabled={isLoading}
          onclick={() => onClickUpdatePasswordButton()}
          value={UPDATE_PASSWORD_MESSAGE.UPDATE}
          className="w-full rounded-[15px] flex justify-center items-center bg-orange-400 text-heading-3 text-white py-[22px] mt-[55px]"
        />
      </section>
    </main>
  );
}
