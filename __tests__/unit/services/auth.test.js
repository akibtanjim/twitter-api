/* eslint-disable no-undef */

'use strict';

const {
  getUserByEmail,
  login,
  logout,
  refreshUserToken,
} = require('../../../services');
const { refreshToken } = require('../../../utils');

const email = 'admin@xyz.com';
const password = '#Admin123';

describe('services/auth', () => {
  describe('getUserByEmail', () => {
    it('Should get user for given email', async () => {
      const result = await getUserByEmail(email);
      return Promise.all([
        expect(result).toHaveProperty('email'),
        expect(result).toHaveProperty('id'),
        expect(result).toHaveProperty('name'),
        expect(result).toHaveProperty('createdAt'),
        expect(result).toHaveProperty('updatedAt'),
        expect(result).toHaveProperty('role'),
      ]);
    });
  });
  describe('login', () => {
    it('Should login user', async () => {
      const result = await login({ email, password });
      return Promise.all([
        expect(result).toHaveProperty('accessToken'),
        expect(result).toHaveProperty('refreshToken'),
      ]);
    });
  });
  describe('logout', () => {
    it('Should logout user', async () => {
      const result = await logout({
        token: 'test',
        user: { exp: 1651395066549 },
      });
      return Promise.all([expect(typeof result).toBe('boolean')]);
    });
  });
  describe('refreshUserToken', () => {
    it('Should refresh user token', async () => {
      const user = {
        id: 1,
        name: 'admin',
        email: 'admin@xyz.com',
        role: 'admin',
        refresh: true,
      };
      const result = await refreshUserToken({
        token: refreshToken(user),
        user,
        body: {
          refreshToken: refreshToken(user),
        },
      });
      return Promise.all([
        expect(result).toHaveProperty('accessToken'),
        expect(result).toHaveProperty('refreshToken'),
      ]);
    });
  });
});
