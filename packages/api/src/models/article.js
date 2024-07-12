const { DataTypes } = require('sequelize');
const dbPostgres = require('../db/dbPostgres');

/**
 * Article model definition.
 * Represents an article in the application.
 * @typedef {object} Article
 * @property {string} id - The unique identifier for the article (UUIDv4).
 * @property {Date} createdAt - The date and time when the article was created.
 * @property {Date} updatedAt - The date and time when the article was last updated.
 * @property {string} title - The title of the article.
 * @property {string} content - The main content of the article.
 * @property {string} slug - The slug of the article, used for SEO-friendly URLs.
 * @property {string} image - The URL of the image associated with the article.
 * @property {string} status - The status of the article ('draft' or 'published').
 * @property {string[]} tags - An array of tags associated with the article.
 * @property {string} userId - The ID of the user who created the article.
 */
const article = dbPostgres.define('article', {
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
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'title',
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'content',
  },
  slug: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'slug',
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'image',
  },
  status: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: 'draft',
    validate: {
      isIn: [['draft', 'published']],
    },
    field: 'status',
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    defaultValue: [],
    field: 'tags',
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'user_id',
    references: {
      model: 'user', // Nombre de la tabla de referencia
      key: 'id', // Nombre de la columna de referencia
    },
  },
});

module.exports = article;
