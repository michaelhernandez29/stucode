const _ = require('lodash');
const user = require('../models/user');

const userService = {};

/**
 * Registers a new user.
 * @param {object} data - The data of the user to register.
 * @param {object?} [params=null] - Additional parameters for the creation.
 * @returns {Promise<object>} A promise that resolves with the newly created user data, excluding the password.
 */
const register = async (data, params = null) => {
  let response = await user.create(data, params);
  response = response.get({ plain: true });
  response = _.omit(response, 'password');
  return response;
};

/**
 * Finds a user by email.
 * @param {string} email - The email of the user to find.
 * @param {object?} [params=null] - Additional parameters for the query.
 * @returns {Promise<object|null>} A promise that resolves with the user data if found, otherwise null.
 */
const findByEmail = async (email, params = null) => {
  return user.findOne({ where: { email }, ...params });
};

userService.register = register;
userService.findByEmail = findByEmail;

module.exports = userService;
