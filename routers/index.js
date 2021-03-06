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
const tweetRoutes = require('./tweet');
const followerRoutes = require('./follower');

/**
 * Create Router
 */

const routers = express.Router();

// Auth related routes
routers.use('/', authRoutes);
routers.use('/', userRoutes);
routers.use('/', healthRoutes);
routers.use('/', tweetRoutes);
routers.use('/', followerRoutes);

module.exports = routers;
