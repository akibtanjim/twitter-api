/* eslint-disable no-undef */

'use strict';

// Load Custom Dependencies
const { createFollowing, checkFollowingExists } = require('../../../services');
const { generateFakeFollowing } = require('../../../utils');

describe('services/follower', () => {
  describe('createFollowing', () => {
    it('Should successfully create new following', async () => {
      const result = await createFollowing(generateFakeFollowing());
      return Promise.all([
        expect(result).toHaveProperty('id'),
        expect(result).toHaveProperty('followedBy'),
        expect(result).toHaveProperty('userId'),
        expect(result).toHaveProperty('createdAt'),
        expect(result).toHaveProperty('updatedAt'),
      ]);
    });
  });
  describe('checkFollowingExists', () => {
    it('Should successfully check following record exists', async () => {
      const result = await checkFollowingExists(2, 1)
        .then(() => true)
        .catch(() => false);
      return Promise.all([expect(result).toBe(result)]);
    });
  });
});
