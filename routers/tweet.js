'use strict';

/**
 * Load Dependencies
 */
const express = require('express');

/**
 * Load custom dependencies
 */

const {
  saveTweet,
  getSelfTweets,
  getTweetsForNewsFeed,
} = require('../controllers');

/**
 * Load Required Middlewares
 */
const { authGaurd, validateRequest } = require('../middlewares');

/**
 * Create Router
 */

const router = express.Router();

/**
 * tweets related routes
 */

router.post('/tweets', [authGaurd, validateRequest('createTweet')], saveTweet);
router.get(
  '/tweets/me',
  [authGaurd, validateRequest('getOwnTweets', 'query')],
  getSelfTweets
);
router.get(
  '/tweets/newsfeed',
  [authGaurd, validateRequest('getNewsFeedTweets', 'query')],
  getTweetsForNewsFeed
);

module.exports = router;
