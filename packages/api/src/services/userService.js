import _ from 'lodash-es';
import { Op } from 'sequelize';

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

/**
 * Retrieves a user by ID from the database.
 *
 * @param {string} id - The ID of the user to be retrieved.
 * @param {object} [params=null] - Additional options for the query.
 * @returns {Promise<object|null>} A promise that resolves to the user object if found, or null if not.
 */
const findById = async (id, params = null) => {
  return user.findOne({ where: { id }, ...params });
};

/**
 * Finds and counts all users based on provided filters.
 *
 * @param {object} filters - Filters for querying users.
 * @param {object?} [params=null] - Additional parameters for the query.
 * @returns {Promise<object>} A promise that resolves to an object containing the count of users and
 * the paginated list of users.
 */
const findAndCountAll = async (filters, params = null) => {
  const { page, limit, find, order } = filters;
  let orderClause = [['firstname', 'ASC']];
  const offset = page * limit;
  const where = {};

  if (!_.isNil(find)) {
    where[Op.or] = [{ firstname: { [Op.iLike]: `%${find}%` } }, { email: { [Op.iLike]: `%${find}%` } }];
  }

  if (order === 'z-a') {
    orderClause = [['firstname', 'DESC']];
  }

  return user.findAndCountAll({
    where,
    order: orderClause,
    offset,
    limit,
    ...params,
  });
};

export default { register, findByEmail, findAndCountAll, findById };
