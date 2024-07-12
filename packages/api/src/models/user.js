const { DataTypes } = require('sequelize');
const dbPostgres = require('../db/dbPostgres');

/**
 * User model definition.
 * Represents a user in the application.
 * @typedef {object} User
 * @property {string} id - The unique identifier for the user (UUIDv4).
 * @property {Date} createdAt - The date and time when the user was created.
 * @property {Date} updatedAt - The date and time when the user was last updated.
 * @property {string} name - The first name of the user.
 * @property {string} lastname - The last name of the user.
 * @property {string} email - The email address of the user. This is unique.
 * @property {string} password - The password for the user account.
 * @property {string} job - The job title or position of the user.
 * @property {string} biography - A brief biography or description of the user.
 * @property {string} image - The URL of the user's profile image.
 */
const user = dbPostgres.define('user', {
  id: {
    type: DataTypes.UUIDV4,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    field: 'id',
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'updated_at',
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'name',
  },
  lastname: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'lastname',
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'email',
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'password',
  },
  job: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'job',
  },
  biography: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'biography',
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'image',
  },
});

module.exports = user;
