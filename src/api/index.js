/* eslint-disable */
import axios from 'axios';
import store from '../index';
import { removeToken } from '../store/user';

const baseURL = process.env.REACT_APP_API_URL;

const authInstance = axios.create({ baseURL });
const baseInstance = axios.create({
  baseURL,
  headers: {
    Authorization: '',
  },
});

const checkTokenValidity = async (token) => {
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
    alert('Token validation error:', error);
    return false;
  }
};

baseInstance.interceptors.request.use(async (config) => {
  const { token } = store.getState().user;
  try {
    if (token) {
      const isValid = await checkTokenValidity(token);
      if (isValid) {
        config.headers['Authorization'] = `Bearer ${token}`;
      } else {
        store.dispatch(removeToken());
        window.location.href = '/login';
        return Promise.reject('Invalid token');
      }
    }
    return config;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
});

baseInstance.interceptors.response.use(({ data }) => data);

const apiRequest = {
  get: (url, request) => baseInstance.get(url, request),
  post: (url, data, config) => baseInstance.post(url, data, { ...config }),
  put: (url, data, config) => baseInstance.put(url, data, { ...config }),
  delete: (url, config) => baseInstance.delete(url, config),
};

export default apiRequest;
