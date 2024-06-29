/**
 * Initializes a Sequelize instance for PostgreSQL using configuration from Convict.
 * @module dbPostgres
 */

const { Sequelize } = require('sequelize');
const config = require('../config/config');
const logger = require('../helpers/logger');

const database = config.get('db.sequelize.database');
const username = config.get('db.sequelize.username');
const password = config.get('db.sequelize.password');
const host = config.get('db.sequelize.host');

/**
 * Sequelize instance configured with database settings from Convict.
 * @type {object}
 * @property {string} database - The name of the database.
 * @property {string} username - The username for the database connection.
 * @property {string} password - The password for the database connection.
 * @property {string} host - The host of the database server.
 * @property {string} dialect - The dialect of the database (set to 'postgres').
 */
const dbPostgres = new Sequelize(database, username, password, {
  host,
  dialect: 'postgres',
  logging: false,
});

/**
 * Tests the database connection.
 * @async
 * @function
 * @returns {Promise<void>} Resolves if the connection is successful, otherwise throws an error.
 * @throws {Error} Throws an error if unable to connect to the database.
 */
async function testConnection() {
  try {
    await dbPostgres.authenticate();
    logger.info('Connection with PostgreSQL has been established successfully');
  } catch (error) {
    logger.error({ message: 'Unable to connect to the database', error });
    throw error;
  }
}

testConnection();

module.exports = dbPostgres;
