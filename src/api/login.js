import apiRequest from '.';

const RESOURSE = '/api/members';

export const trySignUp = async (data) => {
  const response = await apiRequest.post(`${RESOURSE}`, data);

  return response;
};

export const trylogin = async (data) => {
  try {
    const response = await apiRequest.post(`${RESOURSE}`, data);

    return response;
  } catch (error) {
    throw new Error('로그인 실패');
  }
};
