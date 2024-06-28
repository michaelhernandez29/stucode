const app = require('express')();

const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('./helpers/logger');
const pinoHttp = require('pino-http');

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pinoHttp({ logger }));
app.use(cors(corsOptions));
app.use(helmet());

module.exports = app;
