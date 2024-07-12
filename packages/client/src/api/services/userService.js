import Endpoints from '../endpoints';
import HttpClient from '../httpClient';

const userService = {};

/**
 * Registers a new user.
 * @param {object} data - The registration data.
 * @returns {Promise} A promise resolving to the registration response.
 */
const register = (data) => {
  return HttpClient.post(Endpoints.REGISTER, data);
};

/**
 * Logsin a user with provided credentials.
 * @param {object} credentials - The user's credentials.
 * @returns {Promise} A promise resolving to the login response.
 */
const login = (credentials) => {
  return HttpClient.post(Endpoints.LOGIN, credentials);
};

userService.register = register;
userService.login = login;

export default userService;
