import user from '../models/user.js';

/**
 * Registers a new user in the database.
 *
 * @param {object} data - The user data to be registered.
 * @param {object} [params=null] - Additional options for the creation process.
 * @returns {Promise<object>} The registered user object in plain format.
 */
const register = async (data, params = null) => {
  let response = await user.create(data, params);
  response = response.get({ plain: true });
  return response;
};

/**
 * Retrieves a user by email from the database.
 *
 * @param {string} email - The email of the user to be retrieved.
 * @param {object} [params=null] - Additional options for the query.
 * @returns {Promise<object|null>} The user object if found, or null if not.
 */
const findByEmail = async (email, params = null) => {
  return user.findOne({ where: { email }, ...params });
};

export default { register, findByEmail };
