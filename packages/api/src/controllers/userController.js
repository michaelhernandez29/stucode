const crytoHelper = require('../helpers/cryptoHelper');
const errorMessages = require('../constants/errorMessages');
const responseHelper = require('../helpers/responseHelper');
const userService = require('../services/userService');
const validator = require('validator');

/**
 * Handler for POST /users/register
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const register = async (req, res) => {
  const payload = req.body;

  if (!validator.isEmail(payload.email)) {
    responseHelper.badRequest(res, errorMessages.EMAIL_FORMAT_INVALID);
    return;
  }

  const user = await userService.findByEmail(payload.email, { raw: true });
  if (user) {
    responseHelper.conflict(res, errorMessages.EMAIL_ALREADY_EXISTS);
    return;
  }

  payload.password = await crytoHelper.hash(payload.password);
  const response = await userService.register(payload);
  responseHelper.created(res, response);
};

module.exports = { register };
