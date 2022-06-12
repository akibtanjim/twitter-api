/**
 * Load Dependencies
 */
const { validate, getRules } = require('./validate');
const { verifyToken, createToken, refreshToken } = require('./jwt');
const { cacheGet, cacheSet } = require('./cache');
const { caclulateCacheTTL } = require('./date');
const {
  generateFakeUsers,
  generateFakeTweets,
  generateFakeTweet,
} = require('./faker');
const {
  getTweetsVisibility,
  getLimitOffset,
  getPaginatedData,
} = require('./common');

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
  getTweetsVisibility,
  getLimitOffset,
  getPaginatedData,
  generateFakeTweets,
  generateFakeTweet,
};
