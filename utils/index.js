/**
 * Load Dependencies
 */
const { validate, getRules } = require('./validate');
const { verifyToken, createToken, refreshToken } = require('./jwt');
const { cacheGet, cacheSet } = require('./cache');
const { caclulateCacheTTL } = require('./date');
const { generateFakeUsers } = require('./faker');

/**
 * Expose to use in other files
 */
module.exports = {
  validate,
  getRules,
  verifyToken,
  createToken,
  refreshToken,
  cacheGet,
  cacheSet,
  caclulateCacheTTL,
  generateFakeUsers,
};
