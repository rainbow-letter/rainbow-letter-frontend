import axios from 'axios';

import { getToken, removeToken } from 'utils/localStorage';

const baseURL = process.env.REACT_APP_API_URL_LEGACY;

const baseInstance = axios.create({
  baseURL,
  headers: {
    Authorization: '',
  },
});

const logout = () => {
  removeToken();
  alert(`자동 로그인이 풀렸어요\n로그인은 1주만 유지돼요`);
  window.location.href = '/login';
  Promise.reject(new Error('Token is expired'));
};

baseInstance.interceptors.request.use(
  async (config) => {
    const token = getToken();
    const newConfig = { ...config };

    if (token) {
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
    if (error.response.status === 401) {
      return logout();
    }

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
