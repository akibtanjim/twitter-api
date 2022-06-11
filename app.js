'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const logger = require('@chaudhryjunaid/express-bunyan-logger');
const rateLimit = require('express-rate-limit');
/**
 * Load custom dependencies
 */
const variables = require('./variables');
const loggerOptions = require('./config/loggerOptions');
const routes = require('./routers');
const { notFound } = require('./middlewares');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== 'test') {
  app.use(logger(loggerOptions));
}

/**
 * API rate limit
 */
const limiter = rateLimit({
  windowMs: variables.apiRateLimitInterval * 60 * 1000,
  max: variables.apiMaxRequestLimit,
  standardHeaders: false,
  legacyHeaders: true,
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

// All routes
app.use('/api', routes);

app.use(notFound);

/**
 * Start the server
 */
const server = app.listen(variables.appPort);

/**
 * Expose the app
 */
module.exports = { app, server };
