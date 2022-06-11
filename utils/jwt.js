'use strict';

/**
 * Load Dependencies
 */
require('dotenv').config();
const jwt = require('jsonwebtoken');

/**
 * Load Environment Variables
 */
const jwtSecret = process.env.JWT_SECRET;
const jwtAccessTokenExpiry = process.env.JWT_ACCESS_TOKEN_EXPIRY;
const jwtRefreshTokenExpiry = process.env.JWT_REFRESH_TOKEN_EXPIRY;
const jwtAlgorithm = process.env.JWT_ALGORITHM;

/**
 * Verify JWT Token
 * @param {*} token
 * @returns object
 */
exports.verifyToken = (token) => jwt.verify(token, jwtSecret);

/**
 * create JWT Token
 * @param {*} data
 * @returns string
 */
exports.createToken = (data) =>
  jwt.sign(data, jwtSecret, {
    expiresIn: jwtAccessTokenExpiry * 60,
    algorithm: jwtAlgorithm,
  });

/**
 * Refresh jwt token
 * @param {*} data
 * @returns string
 */
exports.refreshToken = (data) =>
  jwt.sign(data, jwtSecret, {
    expiresIn: jwtRefreshTokenExpiry * 60,
    algorithm: jwtAlgorithm,
  });
