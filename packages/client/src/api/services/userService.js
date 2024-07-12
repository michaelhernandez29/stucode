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

userService.register = register;

export default userService;
