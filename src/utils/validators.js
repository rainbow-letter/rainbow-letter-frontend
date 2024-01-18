function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function validatePassword(password) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}

function validatePasswordMatch(password, confirmPassword) {
  return password === confirmPassword;
}

function validatePhoneNumber(phoneNumber) {
  const regex = /^010[0-9]{8}$/;
  return regex.test(phoneNumber) || phoneNumber === '';
}

export const validateDateInput = (value, type) => {
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
