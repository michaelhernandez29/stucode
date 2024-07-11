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
  crypto: {
    saltRounds: {
      doc: 'The number of salt rounds for bcrypt',
      format: 'int',
      default: 10,
      env: 'CRYPTO_SALT_ROUNDS',
    },
    expiresIn: {
      doc: 'JWT expiration time',
      format: String,
      default: '1h',
      env: 'CRYPTO_EXPIRES_IN',
    },
    privateKey: {
      doc: 'Private key for signing JWTs',
      format: String,
      default: 'XFb3y78VfZIb8HUa1I7PcelN4mkcw1uH',
      env: 'CRYPTO_PRIVATE_KEY',
      sensitive: true,
    },
  },
});

config.validate({ allowed: 'strict' });

module.exports = config;
