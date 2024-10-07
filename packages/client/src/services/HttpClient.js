import axios from 'axios';

const HttpClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

HttpClient.interceptors.response.use((response) => response.data);

/**
 * Stores the authentication token and sets it in Axios headers.
 *
 * @param {string} token - The authentication token to be stored and used in requests.
 */
export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('token', token);
    HttpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return;
  }

  localStorage.removeItem('token');
  delete HttpClient.defaults.headers.common['Authorization'];
};

const token = localStorage.getItem('token');
if (token) {
  setAuthToken(token);
}

export default HttpClient;
