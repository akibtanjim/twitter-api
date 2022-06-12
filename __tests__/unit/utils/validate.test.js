/* eslint-disable no-undef */

'use strict';

const { getRules, validate } = require('../../../utils');

describe('utils/validation', () => {
  describe('validate', () => {
    it('Should validate login request', () => {
      const data = {
        email: 'admin@xyz.com',
        password: '#Admin123',
      };
      const result = validate('login', data);
      expect(result).toBeTruthy();
    });
  });
  describe('getType', () => {
    it('Should get validation rules for login request', () => {
      const result = getRules('login');
      expect(result).toHaveProperty('email');
      expect(result).toHaveProperty('password');
    });
  });
  describe('getType', () => {
    it('Should get validation rules for createUser request', () => {
      const result = getRules('createUser');
      expect(result).toHaveProperty('email');
      expect(result).toHaveProperty('password');
      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('role');
    });
  });
  describe('getType', () => {
    it('Should get validation rules for updateUser request', () => {
      const result = getRules('updateUser');
      expect(result).toHaveProperty('email');
      expect(result).toHaveProperty('password');
      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('role');
    });
  });
  describe('getType', () => {
    it('Should get validation rules for refreshToken request', () => {
      const result = getRules('refreshToken');
      expect(result).toHaveProperty('refreshToken');
    });
  });
  describe('getType', () => {
    it('Should get validation rules for createTweet request', () => {
      const result = getRules('createTweet');
      expect(result).toHaveProperty('description');
      expect(result).toHaveProperty('isPublic');
    });
  });
});
