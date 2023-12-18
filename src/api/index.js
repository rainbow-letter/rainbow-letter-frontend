import axios from 'axios';

const baseURL = 'http://52.79.240.249:8081';

const baseInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: '',
  },
});

baseInstance.interceptors.response.use(({ data }) => data);

const apiRequest = {
  post: (url, request) => baseInstance.post(url, request),
};

export default apiRequest;
