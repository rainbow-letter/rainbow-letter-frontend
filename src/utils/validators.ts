function validateEmail(email: string): boolean {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function validatePassword(password: string): boolean {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}

function validatePasswordMatch(
  password: string,
  confirmPassword: string
): boolean {
  return password === confirmPassword;
}

export const isActualDate = (
  year: string,
  month: string,
  day: string
): boolean => {
  if (!year || !month || !day) {
    return false; // 입력값이 비어있으면 false 반환
  }

  const yearInt = parseInt(year, 10);
  const monthInt = parseInt(month, 10) - 1; // 월은 0부터 시작하므로 1을 빼줍니다.
  const dayInt = parseInt(day, 10);

  const date = new Date(yearInt, monthInt, dayInt);
  if (
    date.getFullYear() === yearInt &&
    date.getMonth() === monthInt &&
    date.getDate() === dayInt
  ) {
    return true; // 입력한 날짜가 유효하면 true 반환
  }
  return false; // 그렇지 않으면 false 반환
};

function validatePhoneNumber(phoneNumber: string): boolean {
  const regex = /^010[0-9]{8}$/;
  return regex.test(phoneNumber) || phoneNumber === '';
}

export const validateDateInput = (value: string, type: string) => {
  if (value === '') {
    return true;
  }

  if (type === 'year') {
    if (value.length === 1) {
      return value.match(/^[12]$/);
    }
    if (value.length === 2) {
      return value.match(/^19|20$/);
    }
    if (value.length > 2) {
      return value.match(/^(19|20)\d{1,2}$/);
    }
  }

  if (type === 'month') {
    return value.match(/^(0?[1-9]|1[012])$/);
  }

  if (type === 'day') {
    return value.match(/^(0?[1-9]|[12][0-9]|3[01])$/);
  }

  return false;
};

export {
  validateEmail,
  validatePassword,
  validatePasswordMatch,
  validatePhoneNumber,
};
