'use strict';

/**
 * Load Dependencies
 */
const { generateFakeTweets } = require('../utils/faker');

module.exports = {
  async up(queryInterface) {
    /**
     * Create Tweets
     *
     */
    return queryInterface.bulkInsert('tweets', generateFakeTweets(100), {
      ignoreDuplicates: true,
    });
  },

  async down(queryInterface) {
    /**
     * Delete all the tweets.
     */
    return queryInterface.bulkDelete('tweets', null, {});
  },
};
