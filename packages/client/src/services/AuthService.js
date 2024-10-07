import Endpoints from './Endpoints';
import HttpClient from './HttpClient';

/**
 * Registers a new user.
 *
 * @param {object} data - The registration data for the new user.
 * @returns {Promise<object>} A promise that resolves to the response data from the registration request.
 */
const register = async (data) => {
  return HttpClient.post(Endpoints.REGISTER, data);
};

export default { register };
