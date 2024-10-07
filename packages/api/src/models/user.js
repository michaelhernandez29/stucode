import { DataTypes } from 'sequelize';

import postgres from '../lib/databases/postgres.js';

/**
 * User model definition.
 * Represents a user in the application.
 *
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
const user = postgres.define('user', {
  id: {
    type: DataTypes.UUIDV4,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    field: 'id',
    description: 'The unique identifier for the user (UUIDv4).',
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at',
    description: 'The date and time when the user was created.',
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'updated_at',
    description: 'The date and time when the user was last updated.',
  },
  firstname: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'firstname',
    description: 'The first name of the user.',
  },
  lastname: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'lastname',
    description: 'The last name of the user.',
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'email',
    description: 'The email address of the user. This is unique.',
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'password',
    description: 'The password for the user account.',
  },
  job: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'job',
    description: 'The job title or position of the user.',
  },
  biography: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'biography',
    description: 'A brief biography or description of the user.',
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'image',
    description: "The URL of the user's profile image.",
  },
});

export default user;
