export const saveToken = (token: string) => {
  localStorage.setItem('user', token);
};

export const getToken = () => {
  return localStorage.getItem('user');
};

export const removeToken = () => {
  localStorage.removeItem('user');
};
