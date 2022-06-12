'use strict';

/**
 * Load Dependencies
 */
const express = require('express');

/**
 * Load custom dependencies
 */

const { saveTweet } = require('../controllers/tweets');

/**
 * Load Required Middlewares
 */
const { authGaurd, validateRequest } = require('../middlewares');

/**
 * Create Router
 */

const router = express.Router();

/**
 * tweets related routes
 */

router.post('/tweets', [authGaurd, validateRequest('createTweet')], saveTweet);

module.exports = router;
