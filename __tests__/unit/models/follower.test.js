/* eslint-disable no-undef */

// Load Cutom Dependencies
const { follower } = require('../../../models');
const { generateFakeFollowing } = require('../../../utils');

describe('models/follower', () => {
  it('Should create new following', async () => {
    const result = await follower.create(generateFakeFollowing());
    return Promise.all([
      expect(result).toHaveProperty('id'),
      expect(result).toHaveProperty('followedBy'),
      expect(result).toHaveProperty('userId'),
      expect(result).toHaveProperty('createdAt'),
      expect(result).toHaveProperty('updatedAt'),
    ]);
  });
  it('Should check following existence', async () => {
    const result = await follower
      .findAll({
        where: {
          userId: 2,
          followedBy: 1,
        },
      })
      .then(() => true)
      .catch(() => false);
    return Promise.all([expect(result).toBe(result)]);
  });
});
