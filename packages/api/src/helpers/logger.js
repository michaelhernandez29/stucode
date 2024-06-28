/**
 * Creates a logger instance using Pino with customized options.
 * @module logger
 */

const pino = require('pino');

/**
 * Logger instance configured with Pino and Pino-Pretty.
 * @type {object}
 * @property {object} transport - Transport options for logging.
 */
const logger = pino({
  transport: {
    options: {
      colorize: true,
    },
    target: 'pino-pretty',
  },
});

module.exports = logger;
