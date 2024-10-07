import axios from 'axios';

const HttpClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

HttpClient.interceptors.response.use((response) => response.data);

export default HttpClient;
