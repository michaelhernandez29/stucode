const _ = require('lodash');
const crytoHelper = require('../helpers/cryptoHelper');
const errorCodes = require('../constants/errorCodes');
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

/**
 * Handler for POST /users/login
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const login = async (req, res) => {
  const payload = req.body;

  if (!validator.isEmail(payload.email)) {
    responseHelper.badRequest(res, errorMessages.EMAIL_FORMAT_INVALID);
    return;
  }

  let user = await userService.findByEmail(payload.email, { raw: true });
  if (!user) {
    responseHelper.notFound(res, errorMessages.USER_NOT_FOUND, errorCodes.USER_NOT_FOUND);
    return;
  }

  const areCredentialsCorrect = await crytoHelper.compare(payload.password, user.password);
  if (!areCredentialsCorrect) {
    responseHelper.badRequest(res, errorMessages.CREDENTIALS_INCORRECT);
    return;
  }

  user = _.omit(user, 'password');
  const response = await crytoHelper.sign(user);
  responseHelper.ok(res, response);
};

/**
 * Handler for GET /users
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const findAndCountAll = async (req, res) => {
  const filters = req.query;

  const response = await userService.findAndCountAll(filters, { raw: true });
  responseHelper.ok(res, response.rows, response.count);
};

module.exports = { register, login, findAndCountAll };
