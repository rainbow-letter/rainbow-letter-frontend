import axios from 'axios';

import { getToken, removeToken } from '../utils/localStorage';

const baseURL = process.env.REACT_APP_API_URL;

const authInstance = axios.create({ baseURL });
const baseInstance = axios.create({
  baseURL,
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
    alert(`Token validation error: ${error.message}`);
    return false;
  }
};

baseInstance.interceptors.request.use(
  async (config) => {
    const token = getToken();
    const newConfig = { ...config };

    if (token && !tokenIsValid(token)) {
      removeToken();
      window.location.href = '/login';
      return Promise.reject(new Error('Invalid token'));
    }

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
  ({ data }) => data,
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
