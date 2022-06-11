'use strict';

/**
 * Load Dependencies
 */
const express = require('express');

/**
 * Load custom dependencies
 */

const authRoutes = require('./auth');
const userRoutes = require('./user');
const healthRoutes = require('./health');

/**
 * Create Router
 */

const routers = express.Router();

// Auth related routes
routers.use('/', authRoutes);
routers.use('/', userRoutes);
routers.use('/', healthRoutes);

module.exports = routers;
