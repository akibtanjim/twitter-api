/* eslint-disable no-undef */
const {
  generateFakeUsers,
  generateFakeTweets,
  generateFakeTweet,
  generateFakeFollowers,
  generateFakeFollowing,
} = require('../../../utils');

describe('utils/faker', () => {
  describe('generateFakeUsers', () => {
    it('Should generate 3 fake users', async () => {
      const fakeUsers = generateFakeUsers(3);
      expect(fakeUsers.length).toBe(3);
    });
  });
  describe('generateFakeTweets', () => {
    it('Should generate 5 fake tweets', async () => {
      const fakeTweets = generateFakeTweets(5);
      expect(fakeTweets.length).toBe(5);
    });
  });
  describe('generateFakeTweet', () => {
    it('Should generate one fake tweet', async () => {
      const fakeTweet = generateFakeTweet();
      expect(Object.keys(fakeTweet).length).toBe(5);
    });
  });
  describe('generateFakeFollowers', () => {
    it('Should generate 5 fake followers', async () => {
      const fakeFollowers = generateFakeFollowers(5);
      expect(fakeFollowers.length).toBe(5);
    });
  });
  describe('generateFakeFollowing', () => {
    it('Should generate one fake following', async () => {
      const fakeFollowing = generateFakeFollowing();
      expect(Object.keys(fakeFollowing).length).toBe(4);
    });
  });
});
