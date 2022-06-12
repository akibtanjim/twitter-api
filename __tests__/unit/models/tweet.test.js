/* eslint-disable no-undef */

// Load Cutom Dependencies
const { Op } = require('sequelize');
const { tweet } = require('../../../models');
const { generateFakeTweet } = require('../../../utils');

describe('models/tweet', () => {
  it('Should create new tweet', async () => {
    const result = await tweet.create(generateFakeTweet());
    return Promise.all([
      expect(result).toHaveProperty('id'),
      expect(result).toHaveProperty('description'),
      expect(result).toHaveProperty('isPublic'),
      expect(result).toHaveProperty('userId'),
      expect(result).toHaveProperty('createdAt'),
      expect(result).toHaveProperty('updatedAt'),
    ]);
  });
  it('Should find own tweets(All) of user', async () => {
    const results = await tweet.findAll({ where: { userId: 1 } });
    return Promise.all([expect(results).toBeInstanceOf(Object)]);
  });
  it('Should find own tweets(All) of user for type all', async () => {
    const results = await tweet.findAll({
      where: {
        userId: 1,
        isPublic: {
          [Op.in]: [0, 1],
        },
      },
    });
    return Promise.all([expect(results).toBeInstanceOf(Object)]);
  });
  it('Should find own tweets(Private) of user', async () => {
    const results = await tweet.findAll({
      where: {
        userId: 1,
        isPublic: 0,
      },
    });
    return Promise.all([expect(results).toBeInstanceOf(Object)]);
  });
  it('Should find own tweets(Public) of user', async () => {
    const results = await tweet.findAll({
      where: {
        userId: 1,
        isPublic: 0,
      },
    });
    return Promise.all([expect(results).toBeInstanceOf(Object)]);
  });
  it('Should find own tweets(All) of user with pagination info', async () => {
    const results = await tweet.findAndCountAll({ where: { userId: 1 } });
    return Promise.all([
      expect(results).toBeInstanceOf(Object),
      expect(results).toHaveProperty('rows'),
      expect(results).toHaveProperty('count'),
    ]);
  });
  it('Should find own tweets(All) of user for type all with pagination info', async () => {
    const results = await tweet.findAndCountAll({
      where: {
        userId: 1,
        isPublic: {
          [Op.in]: [0, 1],
        },
      },
    });
    return Promise.all([
      expect(results).toBeInstanceOf(Object),
      expect(results).toHaveProperty('rows'),
      expect(results).toHaveProperty('count'),
    ]);
  });
  it('Should find own tweets(Private) of user with pagination info', async () => {
    const results = await tweet.findAndCountAll({
      where: {
        userId: 1,
        isPublic: 0,
      },
    });
    return Promise.all([
      expect(results).toBeInstanceOf(Object),
      expect(results).toHaveProperty('rows'),
      expect(results).toHaveProperty('count'),
    ]);
  });
  it('Should find own tweets(Public) of user with pagination info', async () => {
    const results = await tweet.findAndCountAll({
      where: {
        userId: 1,
        isPublic: 0,
      },
    });
    return Promise.all([
      expect(results).toBeInstanceOf(Object),
      expect(results).toHaveProperty('rows'),
      expect(results).toHaveProperty('count'),
    ]);
  });
});
