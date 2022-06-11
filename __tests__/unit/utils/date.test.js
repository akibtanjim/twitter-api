/* eslint-disable no-undef */
const { caclulateCacheTTL } = require('../../../utils');

describe('utils/date', () => {
  describe('caclulateCacheTTL', () => {
    it('Should return a timestamp', () => {
      const result = caclulateCacheTTL(1651395066549);
      expect(typeof result).toBe('number');
    });
  });
});
