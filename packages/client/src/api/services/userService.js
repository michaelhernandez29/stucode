import Endpoints from '../endpoints';
import HttpClient from '../httpClient';

const userService = {};

/**
 * Registers a new user.
 * @param {object} data - The registration data.
 * @returns {Promise<object>} A promise resolving to the registration response.
 */
const register = (data) => {
  return HttpClient.post(Endpoints.REGISTER, data);
};

/**
 * Logsin a user with provided credentials.
 * @param {object} credentials - The user's credentials.
 * @returns {Promise<object>} A promise resolving to the login response.
 */
const login = (credentials) => {
  return HttpClient.post(Endpoints.LOGIN, credentials);
};

/**
 * Retrieves a list of users based on a query.
 * @param {String} query - The query string for filtering or pagination.
 * @returns {Promise<object>} A promise that resolves to the list of users.
 */
const findAndCountAll = (query) => {
  return HttpClient.get(`${Endpoints.USERS}${query}`);
};

/**
 * Retrieves a user by their ID.
 * @param {string} id - The ID of the user.
 * @returns {Promise<object>} A promise that resolves to the user data.
 */
const findById = (id) => {
  return HttpClient.get(`${Endpoints.USERS}/${id}`);
};

userService.register = register;
userService.login = login;
userService.findAndCountAll = findAndCountAll;
userService.findById = findById;

export default userService;
