/**
 * Load variables from env
 */
const loggerName = process.env.LOGGER_NAME;
const env = process.env.APP_ENV || 'local';
const appPort = process.env.APP_PORT || 3000;
const logLevel = process.env.LOG_LEVEL;
const host = process.env.HOST || 'localhost';
const dbHost = process.env.DB_HOSTNAME;
const dbUserName = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const dbDialect = process.env.DB_DIALECT;
const dbPort = process.env.DB_PORT;
const jwtSecret = process.env.JWT_SECRET;
const jwtAccessTokenExpiry = process.env.JWT_ACCESS_TOKEN_EXPIRY;
const jwtRefreshTokenExpiry = process.env.JWT_REFRESH_TOKEN_EXPIRY;
const jwtAlgorithm = process.env.JWT_ALGORITHM;
const apiRateLimitInterval = process.env.API_RATE_LIMIT_INTERVAL_IN_MIN;
const apiMaxRequestLimit = process.env.API_MAX_REQUEST_LIMIT;

/**
 * Expose variables so that other modules can use them
 */

const variables = {
  appPort,
  env,
  loggerName,
  logLevel,
  host,
  dbHost,
  dbUserName,
  dbPassword,
  dbName,
  dbDialect,
  dbPort,
  jwtSecret,
  jwtAccessTokenExpiry,
  jwtRefreshTokenExpiry,
  jwtAlgorithm,
  apiRateLimitInterval,
  apiMaxRequestLimit,
};

module.exports = variables;
