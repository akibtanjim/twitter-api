/* eslint-disable no-undef */

'use strict';

let userId;
const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
  updateUserById,
} = require('../../../services');

describe('services/user', () => {
  describe('getAllUsers', () => {
    it('Should get all users', async () => {
      const result = await getAllUsers();
      return Promise.all([expect(result).toBeInstanceOf(Object)]);
    });
  });
  describe('getUserById', () => {
    it('Should get user with id 1', async () => {
      const result = await getUserById(1);
      return Promise.all([
        expect(result).toHaveProperty('id'),
        expect(result).toHaveProperty('name'),
        expect(result).toHaveProperty('role'),
        expect(result).toHaveProperty('createdAt'),
        expect(result).toHaveProperty('updatedAt'),
      ]);
    });
  });
  describe('createUser', () => {
    it('Should createUser', async () => {
      const result = await createUser({
        name: `admin`,
        email: `admin-${Date.now()}@xyz.com`,
        role: 'admin',
        password: '#Admin123',
      });
      userId = result.id;
      return Promise.all([
        expect(result).toHaveProperty('id'),
        expect(result).toHaveProperty('name'),
        expect(result).toHaveProperty('role'),
        expect(result).toHaveProperty('email'),
        expect(result).toHaveProperty('createdAt'),
        expect(result).toHaveProperty('updatedAt'),
      ]);
    });
  });
  describe('updateUserById', () => {
    it('Should delete user', async () => {
      const result = await updateUserById(userId, { name: 'user' });
      return Promise.all([expect(result).toBeDefined()]);
    });
  });
  describe('deleteUserById', () => {
    it('Should delete user', async () => {
      const result = await deleteUserById(userId);
      return Promise.all([expect(result).toBeDefined()]);
    });
  });
});
