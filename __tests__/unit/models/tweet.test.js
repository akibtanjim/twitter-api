/* eslint-disable no-undef */

// Load Cutom Dependencies
const { tweet } = require('../../../models');
const { generateFakeTweet } = require('../../../utils/faker');

describe('models/tweet', () => {
  it('Should create new tweet', async () => {
    const result = await tweet.create(generateFakeTweet());
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
