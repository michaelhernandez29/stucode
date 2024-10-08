import errorCodes from '../constants/errorCodes.js';
import errorMessages from '../constants/errorMessages.js';
import responseHelper from '../helpers/responseHelper.js';
import userService from '../services/userService.js';

/**
 * Handler for GET /users
 *
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 */
const findAndCountAll = async (req, res) => {
  const filters = req.query;

  const response = await userService.findAndCountAll(filters, { raw: true, attributes: { exclude: ['password'] } });
  responseHelper.ok(res, response.rows, response.count);
};

/**
 * Handler for GET /users/{userId}
 *
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 */
const findById = async (req, res) => {
  const { userId } = req.params;

  const user = await userService.findById(userId, { raw: true, attributes: { exclude: ['password'] } });
  if (!user) {
    responseHelper.notFound(res, errorMessages.USER_NOT_FOUND, errorCodes.USER_NOT_FOUND);
    return;
  }

  responseHelper.ok(res, user);
};

export { findAndCountAll, findById };
