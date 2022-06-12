/* eslint-disable no-undef */
const { generateFakeUsers } = require('../../../utils');
const { generateFakeTweets } = require('../../../utils/faker');

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
});
