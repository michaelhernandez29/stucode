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
  db: {
    sequelize: {
      database: {
        doc: 'The database name',
        format: '*',
        default: 'stucode',
        env: 'DB_POSTGRES_DATABASE',
      },
      username: {
        doc: 'The database username',
        format: '*',
        default: 'stucode',
        env: 'DB_POSTGRES_USERNAME',
      },
      password: {
        doc: 'The database password',
        format: '*',
        default: 'stucode',
        env: 'DB_POSTGRES_PASSWORD',
        sensitive: true,
      },
      host: {
        doc: 'The database host',
        format: '*',
        default: 'localhost',
        env: 'DB_POSTGRES_HOST',
      },
    },
  },
});

config.validate({ allowed: 'strict' });

module.exports = config;
