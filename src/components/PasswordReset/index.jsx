/* eslint-disable no-shadow */

import React from 'react';

import { useNavigate } from 'react-router-dom';
import PasswordResetForm from './PasswordResetForm';
import { updatePassword } from '../../api/user';

function PasswordReset() {
  const navigate = useNavigate();

  const onChangePassword = async (newPassword) => {
    try {
      await updatePassword({ newPassword });
      navigate(-1);
    } catch (error) {
      console.error('비밀번호 변경 실패:', error);
    }
  };

  return <PasswordResetForm onClick={onChangePassword} />;
}

export default PasswordReset;
