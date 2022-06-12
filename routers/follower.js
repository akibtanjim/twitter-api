'use strict';

/**
 * Load Dependencies
 */
const express = require('express');

/**
 * Load custom dependencies
 */

const { follow } = require('../controllers');

/**
 * Load Required Middlewares
 */
const { authGaurd, validateRequest } = require('../middlewares');

/**
 * Create Router
 */

const router = express.Router();

/**
 * Following related routes
 */

router.post(
  '/follows',
  [authGaurd, validateRequest('createFollowing')],
  follow
);

module.exports = router;
