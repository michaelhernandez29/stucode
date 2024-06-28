/**
 * Creates a configuration object using Convict with defined schema and validation.
 * @module config
 */

const convict = require('convict');

/**
 * Configuration object defined with Convict schema and validated.
 * @type {object}
 * @property {object} env - Configuration for application environment.
 */
const config = convict({
  env: {
    doc: 'The application environment',
    format: ['production', 'test', 'local'],
    default: 'local',
    env: 'NODE_ENV',
  },
  port: {
    doc: 'The port to bind',
    format: 'port',
    default: 3650,
    env: 'PORT',
  },
});

config.validate({ allowed: 'strict' });

module.exports = config;
