export function emailError(error) {
  if (
    error.code === 'EXISTS_EMAIL' ||
    error.code === 'NOT_VALID_EMAIL' ||
    error.code === 'METHOD_ARGUMENT_NOT_VALID' ||
    error.code === 'CHECK_EMAIL_AND_PASSWORD' ||
    error.code === 'LEAVE_MEMBER'
  ) {
    return true;
  }

  return false;
}

export function emailErrorMessage(error) {
  if (!error.message) return false;
  if (
    error.code === 'EXISTS_EMAIL' ||
    error.code === 'NOT_VALID_EMAIL' ||
    error.code === 'LEAVE_MEMBER'
  ) {
    return error.message;
  }

  return false;
}

export function passwordError(error) {
  if (
    error.code === 'NOT_VALID_PASSWORD' ||
    error.code === 'METHOD_ARGUMENT_NOT_VALID' ||
    error.code === 'CHECK_EMAIL_AND_PASSWORD'
  ) {
    return true;
  }

  return false;
}
