'use strict';

/**
 * Load Dependencies
 */
const express = require('express');

/**
 * Load custom dependencies
 */

const { health } = require('../controllers');

/**
 * Create Router
 */

const router = express.Router();

/**
 * auth related routes
 */
router.get('/health', health);

module.exports = router;
