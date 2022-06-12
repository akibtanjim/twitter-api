'use strict';

/**
 * Load Dependencies
 */
const { generateFakeFollowers } = require('../utils/faker');

module.exports = {
  async up(queryInterface) {
    /**
     * Create followers
     *
     */
    return queryInterface.bulkInsert('followers', generateFakeFollowers(100), {
      ignoreDuplicates: true,
    });
  },

  async down(queryInterface) {
    /**
     * Delete all the followers.
     */
    return queryInterface.bulkDelete('followers', null, {});
  },
};
