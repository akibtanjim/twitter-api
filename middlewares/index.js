'use strict';

/**
 * Load Dependencies
 */
const authGaurd = require('./authGuard');
const notFound = require('./notFound');
const validateRequest = require('./validateRequest');
const checkIfAdmin = require('./checkIfAdmin');

/**
 * Expose to use in other files
 */
module.exports = {
  authGaurd,
  notFound,
  validateRequest,
  checkIfAdmin,
};
