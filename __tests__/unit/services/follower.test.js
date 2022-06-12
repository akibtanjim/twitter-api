/* eslint-disable no-undef */

'use strict';

// Load Custom Dependencies
const { createFollowing } = require('../../../services');
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
});
