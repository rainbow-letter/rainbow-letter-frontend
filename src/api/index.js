import axios from 'axios';

import {
  getToken,
  removeToken,
  removeLoginTimestamp,
  getLoginTimestamp,
} from 'utils/localStorage';

const baseURL = process.env.REACT_APP_API_URL;

const baseInstance = axios.create({
  baseURL,
  headers: {
    Authorization: '',
  },
});

const isExpireToken = (timestamp) => {
  if (isNaN(timestamp)) {
    return logout();
  }
  return Number(timestamp) < Date.now();
};

const logout = () => {
  removeToken();
  removeLoginTimestamp();
  alert(`자동 로그인이 풀렸어요\n로그인은 1주만 유지돼요`);
  window.location.href = '/login';
  Promise.reject(new Error('Token is expired'));
};

baseInstance.interceptors.request.use(
  async (config) => {
    const token = getToken();
    const loginTimestamp = getLoginTimestamp();
    const newConfig = { ...config };

    if (token) {
      const isExpired = isExpireToken(loginTimestamp);

      if (isExpired) return logout();

      newConfig.headers.Authorization = `Bearer ${token}`;
    }
    return newConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

baseInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

const apiRequest = {
  get: (url, request) => baseInstance.get(url, request),
  post: (url, data, config) => baseInstance.post(url, data, { ...config }),
  put: (url, data, config) => baseInstance.put(url, data, { ...config }),
  delete: (url, config) => baseInstance.delete(url, config),
};

export default apiRequest;
