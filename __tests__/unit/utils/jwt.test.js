/* eslint-disable no-undef */
const { createToken, refreshToken, verifyToken } = require('../../../utils');

describe('utils/jwt', () => {
  describe('createToken', () => {
    it('Should return a token', () => {
      const token = createToken({
        id: 1,
        name: 'Test',
        role: 'admin',
      });
      expect(typeof token).toBe('string');
    });
  });

  describe('refreshToken', () => {
    it('Should refresh a token', () => {
      const token = refreshToken({
        id: 1,
        name: 'Test',
        role: 'admin',
        refresh: true,
      });
      expect(typeof token).toBe('string');
    });
  });

  describe('verifyToken', () => {
    it('Should verify a token', () => {
      const token = createToken({
        id: 1,
        name: 'Test',
        role: 'admin',
      });
      const decoded = verifyToken(token);
      expect(typeof decoded).toBe('object');
    });
  });
});
