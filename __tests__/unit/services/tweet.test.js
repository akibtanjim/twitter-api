/* eslint-disable no-undef */

'use strict';

// Load Custom Dependencies
const { createTweet } = require('../../../services');
const { generateFakeTweet } = require('../../../utils/faker');

describe('services/tweet', () => {
  describe('createTweet', () => {
    it('Should successfully create new tweet', async () => {
      const result = await createTweet(generateFakeTweet());
      return Promise.all([
        expect(result).toHaveProperty('id'),
        expect(result).toHaveProperty('description'),
        expect(result).toHaveProperty('isPublic'),
        expect(result).toHaveProperty('userId'),
        expect(result).toHaveProperty('createdAt'),
        expect(result).toHaveProperty('updatedAt'),
      ]);
    });
  });
});
