'use strict';

/**
 * Calculate cache ttl for a token to be blacklisted
 * @param {*} tokenExpireTime
 * @returns timestamp
 */
exports.caclulateCacheTTL = (tokenExpireTime) => {
  const now = new Date();
  const expire = new Date(tokenExpireTime);
  return now.getTime() - expire.getTime();
};
