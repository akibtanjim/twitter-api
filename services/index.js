/**
 * Load Dependencies
 */
const { login, getUserByEmail, logout, refreshUserToken } = require('./auth');
const { createFollowing, checkFollowingExists } = require('./follower');
const { createTweet, getOwnTweets } = require('./tweet');
const {
  getAllUsers,
  getUserById,
  createUser,
  checkUserExists,
  deleteUserById,
  updateUserById,
} = require('./user');

/**
 * Expose to use in other files
 */
module.exports = {
  login,
  getUserByEmail,
  getAllUsers,
  getUserById,
  createUser,
  checkUserExists,
  deleteUserById,
  updateUserById,
  logout,
  refreshUserToken,
  createTweet,
  getOwnTweets,
  createFollowing,
  checkFollowingExists,
};
