const bcrypt = require('bcrypt');
const config = require('../config/config');

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

cryptoHelper.hash = hash;

module.exports = cryptoHelper;
