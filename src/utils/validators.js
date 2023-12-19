function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function validatePassword(password) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(password);
}

function validatePasswordMatch(password, confirmPassword) {
  return password === confirmPassword;
}

function validatePhoneNumber(phoneNumber) {
  const regex = /^010[0-9]{8}$/;
  return regex.test(phoneNumber);
}

export {
  validateEmail,
  validatePassword,
  validatePasswordMatch,
  validatePhoneNumber,
};
