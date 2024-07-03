const app = require('express')();

const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('./helpers/logger');
const openApiValidator = require('express-openapi-validator');
const path = require('path');
const pinoHttp = require('pino-http');
const redoc = require('redoc-express');

require('./db/dbPostgres');

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pinoHttp({ logger }));
app.use(cors(corsOptions));
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", 'unpkg.com'],
      workerSrc: ["'self'", 'blob:'],
    },
  }),
);
app.get('/api/api.yml', (req, res) => {
  res.sendFile('openapi/api.yml', { root: path.resolve(__dirname) });
});
app.use(
  '/v1/api-docs',
  redoc({
    title: 'StuCode API Docs',
    specUrl: '/api/api.yml',
  }),
);

app.use(
  openApiValidator.middleware({
    apiSpec: __dirname + '/openapi/api.yml',
    operationHandlers: __dirname + '/controllers',
  }),
);

module.exports = app;
