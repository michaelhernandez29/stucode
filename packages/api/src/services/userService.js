const _ = require('lodash');
const { Op } = require('sequelize');

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

/**
 * Finds a user by id.
 * @param {string} id - The id of the user to find.
 * @param {object?} [params=null] - Additional parameters for the query.
 * @returns {Promise<object|null>} A promise that resolves with the user data if found, otherwise null.
 */
const findById = async (id, params = null) => {
  return user.findOne({ where: { id }, attributes: { exclude: ['password'] }, ...params });
};

/**
 * Finds and counts all users based on provided filters.
 * @param {object} filters - Filters for querying users.
 * @param {object?} [params=null] - Additional parameters for the query.
 * @returns {Promise<object>} A promise that resolves to an object containing the count of users and
 * the paginated list of users.
 */
const findAndCountAll = async (filters, params = null) => {
  const { page, limit, find, order } = filters;
  let orderClause = [['name', 'ASC']];
  const offset = page * limit;
  const where = {};

  if (find) {
    where[Op.or] = [{ name: { [Op.iLike]: `%${find}%` } }, { email: { [Op.iLike]: `%${find}%` } }];
  }

  if (order === 'z-a') {
    orderClause = [['name', 'DESC']];
  }

  return user.findAndCountAll({
    where,
    order: orderClause,
    offset,
    limit,
    attributes: { exclude: ['password'] },
    ...params,
  });
};

/**
 * Updates a user by id.
 * @param {string} id - The id of the user to update.
 * @param {object} data - The new data to update the user with.
 * @returns {Promise<object>} A promise that resolves with the updated user data.
 */
const updateById = async (id, data) => {
  const response = await user.update(data, { where: { id }, returning: true });
  return response[1][0].get({ plain: true });
};

userService.register = register;
userService.findByEmail = findByEmail;
userService.findById = findById;
userService.findAndCountAll = findAndCountAll;
userService.updateById = updateById;

module.exports = userService;
