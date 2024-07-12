const bcrypt = require('bcrypt');
const config = require('../config/config');
const jwt = require('jsonwebtoken');

const cryptoHelper = {};

/**
 * Generates a hash for the provided text using bcrypt.
 * @param {string} text - The text to hash.
 * @returns {Promise<string>} A promise that resolves with the hashed text.
 */
const hash = async (text) => {
  const saltRounds = config.get('crypto.saltRounds');
  return bcrypt.hash(text, saltRounds);
};

/**
 * Compares a plain text with a hashed text to see if they match.
 *
 * @param {string} plainText - The plain text to compare.
 * @param {string} hash - The hashed text to compare against.
 * @returns {Promise<boolean>} A Promise resolving to a boolean indicating whether the texts match.
 */
const compare = async (plainText, hash) => {
  return bcrypt.compare(plainText, hash);
};

/**
 * Signs the given data into a JWT.
 *
 * @param {object} data - The data to be included in the JWT payload.
 * @returns {Promise<string>} A Promise resolving to the signed JWT.
 */
const sign = async (data) => {
  const privateKey = config.get('crypto.privateKey');
  const expiresIn = config.get('crypto.expiresIn');
  return jwt.sign(data, privateKey, { expiresIn });
};

cryptoHelper.hash = hash;
cryptoHelper.compare = compare;
cryptoHelper.sign = sign;

module.exports = cryptoHelper;
