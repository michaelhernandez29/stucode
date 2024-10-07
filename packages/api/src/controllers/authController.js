import _ from 'lodash-es';
import validator from 'validator';

import errorCodes from '../constants/errorCodes.js';
import errorMessages from '../constants/errorMessages.js';
import cryptoHelper from '../helpers/cryptoHelper.js';
import responseHelper from '../helpers/responseHelper.js';
import userService from '../services/userService.js';

/**
 * Handler for POST /users/register
 *
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 */
const register = async (req, res) => {
  const payload = req.body;

  if (!validator.isEmail(payload.email)) {
    responseHelper.badRequest(res, errorMessages.INVALID_EMAIL, errorCodes.BAD_REQUEST);
    return;
  }

  const user = await userService.findByEmail(payload.email, { raw: true });
  if (user) {
    responseHelper.conflict(res, errorMessages.EMAIL_ALREADY_REGISTERED, errorCodes.CONFLICT);
    return;
  }

  payload.password = await cryptoHelper.hash(payload.password);
  let response = await userService.register(payload);
  response = _.omit(response, 'password');

  responseHelper.created(res, response);
};

/**
 * Handler for POST /users/login
 *
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 */
const login = async (req, res) => {
  let payload = req.body;

  if (!validator.isEmail(payload.email)) {
    responseHelper.badRequest(res, errorMessages.INVALID_EMAIL, errorCodes.BAD_REQUEST);
    return;
  }

  const user = await userService.findByEmail(payload.email, { raw: true });
  if (!user) {
    responseHelper.notFound(res, errorMessages.USER_NOT_FOUND, errorCodes.USER_NOT_FOUND);
    return;
  }

  const isPasswordCorrect = await cryptoHelper.compare(payload.password, user.password);
  if (!isPasswordCorrect) {
    responseHelper.badRequest(res, errorMessages.CREDENTIALS_NOT_VALID, errorCodes.BAD_REQUEST);
    return;
  }

  payload = _.omit(payload, 'password');
  const data = cryptoHelper.generateToken(payload);
  responseHelper.ok(res, data);
};

export { login, register };
