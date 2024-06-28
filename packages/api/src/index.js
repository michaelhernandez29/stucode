const api = require('./api');
const config = require('./config/config');
const logger = require('./helpers/logger');

const PORT = config.get('port');
api.listen(3650, () => {
  logger.info(`Server listening on port ${PORT}`);
});
