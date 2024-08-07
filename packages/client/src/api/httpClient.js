import axios from 'axios';

const HttpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

HttpClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error?.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  },
);

const setAuthorizationToken = (token) => {
  HttpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

HttpClient.setAuthorizationToken = setAuthorizationToken;

export default HttpClient;
