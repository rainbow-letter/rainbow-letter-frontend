/* eslint-disable import/no-cycle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PasswordChangeForm from './PasswordChangeForm';
import { updatePassword } from '../../api/user'; // 가정된 API 호출 함수

function PasswordChange() {
  const dispatch = useDispatch();
  const currentPassword = useSelector((state) => state.user.password); // 가정된 현재 비밀번호 상태
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    // 기존 비밀번호 가져오기
    // dispatch(getCurrentPassword()); // 가정된 액션
  }, [dispatch]);

  // eslint-disable-next-line no-shadow
  const onChangePassword = async (newPassword) => {
    try {
      // PUT 요청으로 비밀번호 변경
      await updatePassword({ password: currentPassword, newPassword });
      console.log('비밀번호 변경 성공');
    } catch (error) {
      console.error('비밀번호 변경 실패:', error);
    }
  };

  return (
    <PasswordChangeForm
      newPassword={newPassword}
      setNewPassword={setNewPassword}
      onClick={onChangePassword}
    />
  );
}

export default PasswordChange;

// PUT /api/members/password HTTP/1.1
// Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyQGVtYWlsLmNvbSIsInJvbGVzIjoiUk9MRV9VU0VSIiwiZXhwIjoxNzA0MzA2NDE3fQ.fbVgJNRUeZphYQJlSRdbOGVzVJ9kwFhVpZxPxbpaoyU
// Content-Type: application/json
// Content-Length: 60

// {
//   "password" : "user1234",
//   "newPassword" : "password1"
// }
