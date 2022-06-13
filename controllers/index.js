'use strict';

/**
 * Load Dependencies
 */
const { login, logout, tokenRefresh } = require('./auth');
const {
  getUsers,
  getUser,
  saveUser,
  removeUser,
  modifyUser,
} = require('./user');
const { health } = require('./health');
const { saveTweet, getSelfTweets, getTweetsForNewsFeed } = require('./tweet');
const { follow } = require('./follower');

/**
 * Expose to use in other files
 */
module.exports = {
  login,
  getUsers,
  getUser,
  health,
  saveUser,
  removeUser,
  modifyUser,
  logout,
  tokenRefresh,
  saveTweet,
  getSelfTweets,
  follow,
  getTweetsForNewsFeed,
};
