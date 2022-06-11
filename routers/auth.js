'use strict';

/**
 * Load Dependencies
 */
const express = require('express');

/**
 * Load custom dependencies
 */

const { login, logout, tokenRefresh } = require('../controllers');

const { validateRequest, authGaurd } = require('../middlewares');

/**
 * Create Router
 */

const router = express.Router();

/**
 * auth related routes
 */
router.post('/login', validateRequest('login'), login);
router.post('/logout', authGaurd, logout);
router.post('/refresh-token', validateRequest('refreshToken'), tokenRefresh);

module.exports = router;
