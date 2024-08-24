import { ErrorData } from 'types/user';

export function emailError(error: ErrorData): boolean {
  // for 회원가입
  if (
    error.code === 'EXISTS_EMAIL' ||
    error.code === 'NOT_VALID_EMAIL' ||
    error.code === 'METHOD_ARGUMENT_NOT_VALID' ||
    error.code === 'CHECK_EMAIL_AND_PASSWORD' ||
    error.code === 'LEAVE_MEMBER'
  ) {
    return true;
  }

  // for 로그인
  if (
    error.message === '이미 존재하는 이메일입니다.' ||
    error.message === '이메일 및 비밀번호를 확인 해주세요.' ||
    error.message === '탈퇴된 계정입니다.'
  ) {
    return true;
  }

  return false;
}

export function emailErrorMessage(
  error: ErrorData
): Error['message'] | boolean {
  if (!error.message) return false;

  // for 회원가입
  if (error.message === '이미 존재하는 이메일입니다.') {
    return error.message;
  }

  if (error.code === 'NOT_VALID_EMAIL') {
    return error.message;
  }

  return false;
}

export function passwordError(error: ErrorData): boolean {
  // for 회원가입
  if (
    error.code === 'NOT_VALID_PASSWORD' ||
    error.code === 'METHOD_ARGUMENT_NOT_VALID' ||
    error.code === 'CHECK_EMAIL_AND_PASSWORD'
  ) {
    return true;
  }

  // for 로그인
  if (
    error.message === '이메일 및 비밀번호를 확인 해주세요.' ||
    error.message === '탈퇴된 계정입니다.'
  ) {
    return true;
  }

  return false;
}
