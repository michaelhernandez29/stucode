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

  const response = await userService.findAndCountAll(filters, { raw: true });
  responseHelper.ok(res, response.rows, response.count);
};

export { findAndCountAll };
