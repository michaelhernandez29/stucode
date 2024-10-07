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

export { register };
