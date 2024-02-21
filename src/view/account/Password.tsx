/* eslint-disable no-alert */
import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import UserInput from 'components/Login/UserInput';
import SubmitButton from 'components/Login/SubmitButton';
import {
  ERROR_MESSAGE,
  UPDATE_PASSWORD_MESSAGE,
} from 'components/Login/constants';
import { updatePassword } from 'api/user';
import { removeToken, saveToken } from 'utils/localStorage';
import { validatePasswordMatch, validatePassword } from 'utils/validators';

type ErrorData = {
  type: string;
  message: string;
};

type UserInfo = {
  password: string;
  newPassword: string;
};

export default function Password() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    password: '',
    newPassword: '',
  });
  const [errorData, setErrorData] = useState<ErrorData | null>({
    type: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      saveToken(token);
    }
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

  const onFinishUpdate = (isSuccess: boolean) => {
    if (isSuccess) {
      setErrorData(null);
    }
    removeToken();
    navigate('/home');
  };

  const onErrorHandling = (error: unknown) => {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.data.code === 'UN_AUTHORIZE') {
        alert('토큰 유효기간이 지났습니다.');
        onFinishUpdate(false);
      }
    }
    if (error instanceof Error) {
      setErrorData({
        ...errorData,
        type: error.message,
        message: ERROR_MESSAGE[error.message],
      });
    }
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
      onErrorHandling(error);
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
        <p className="text-solo-medium text-gray-1 text-center mt-[1.125rem]">
          {UPDATE_PASSWORD_MESSAGE.DESCRIPTION}
        </p>
      </section>
      <section className="mt-[3.625rem]">
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
        <label htmlFor="newPasswordCheck" className="block mb-4 mt-[3.313rem]">
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
          className="w-full rounded-2xl flex justify-center items-center bg-orange-400 text-heading-3 text-white py-[1.375rem] mt-[3.625rem]"
        />
      </section>
    </main>
  );
}
