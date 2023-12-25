/* eslint-disable */
import axios from 'axios';
import store from '../index';

const baseURL = 'http://rainbowletter.handwoong.com';

const baseInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: '',
  },
});

baseInstance.interceptors.request.use((config) => {
  const { token } = store.getState().user;
  try {
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  } catch (error) {
    console.error(error);
  }
});

baseInstance.interceptors.response.use(({ data }) => data);

const apiRequest = {
  get: (url, request) => baseInstance.get(url, request),
  post: (url, request) => baseInstance.post(url, request),
  put: (url, request) => baseInstance.put(url, request),
  delete: (url, request) => baseInstance.delete(url, request),
};

export default apiRequest;
