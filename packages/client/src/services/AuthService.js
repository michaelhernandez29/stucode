import Endpoints from './Endpoints';
import HttpClient from './HttpClient';

/**
 * Registers a new user.
 *
 * @param {object} data - The registration data for the new user.
 * @param {string} data.firstname - The first name of the user.
 * @param {string} data.lastname - The last name of the user.
 * @param {string} data.email - The email address of the user.
 * @param {string} data.password - The password for the user account.
 * @returns {Promise<object>} A promise that resolves to the response data from the registration request.
 */
const register = async (data) => {
  return HttpClient.post(Endpoints.REGISTER, data);
};

/**
 * Logs in a user.
 *
 * @param {object} data - The login credentials for the user.
 * @param {string} data.email - The email address of the user.
 * @param {string} data.password - The password for the user account.
 * @returns {Promise<object>} A promise that resolves to the response data from the login request.
 */
const login = async (data) => {
  return HttpClient.post(Endpoints.LOGIN, data);
};

export default { register, login };
