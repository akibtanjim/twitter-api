/* eslint-disable no-undef */
const { cacheGet, cacheSet } = require('../../../utils');

describe('utils/cache', () => {
  describe('cacheSet', () => {
    it('Should set a cache named test', async () => {
      const cache = await cacheSet('test', 'test', 60);
      expect(cache).toBe(true);
    });
  });

  describe('cacheGet', () => {
    it('Should retrive a cache named test', async () => {
      const cache = await cacheGet('test');
      expect(typeof cache).toBe('string');
    });
  });
});
