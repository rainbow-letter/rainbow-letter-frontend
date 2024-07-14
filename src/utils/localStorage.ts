export const saveToken = (token: string) => {
  localStorage.setItem('user', token);
};

export const getToken = () => {
  return localStorage.getItem('user');
};

export const removeToken = () => {
  localStorage.removeItem('user');
};

export const removeLoginTimestamp = () => {
  localStorage.removeItem('expireToken');
};

export const setExpireModal = (date: string) => {
  return localStorage.setItem('expire', date);
};

export const getExpireModal = () => {
  return localStorage.getItem('expire');
};

export const setExpireToken = (date: string) => {
  return localStorage.setItem('expireToken', date);
};

export const getLoginTimestamp = () => {
  return localStorage.getItem('expireToken');
};
