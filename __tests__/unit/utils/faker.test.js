/* eslint-disable no-undef */
const { generateFakeUsers } = require('../../../utils');

describe('utils/faker', () => {
  describe('generateFakeUsers', () => {
    it('Should generate 3 fake users', async () => {
      const fakeUsers = generateFakeUsers(3);
      expect(fakeUsers.length).toBe(3);
    });
  });
});
