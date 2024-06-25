import axios from 'axios';

import { getToken, removeToken } from 'utils/localStorage';

const baseURL = process.env.REACT_APP_API_URL;

const authInstance = axios.create({ baseURL });
const baseInstance = axios.create({
  baseURL,
  headers: {
    Authorization: '',
  },
});

const tokenIsValid = async (token) => {
  try {
    const response = await authInstance.post(
      '/api/members/verify',
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.status === 200;
  } catch (error) {
    alert(`자동 로그인이 풀렸어요\n로그인은 1주만 유지돼요`);
    return false;
  }
};

baseInstance.interceptors.request.use(
  async (config) => {
    const token = getToken();
    const newConfig = { ...config };

    if (token) {
      const isValid = await tokenIsValid(token);
      if (!isValid) {
        removeToken();
        window.location.href = '/login';
        return Promise.reject(new Error('Token is expired'));
      }
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
