/* eslint-disable no-undef */

'use strict';

// Load Custom Dependencies
const {
  createTweet,
  getOwnTweets,
  getNewsFeedTweets,
} = require('../../../services');
const { generateFakeTweet } = require('../../../utils/faker');

describe('services/tweet', () => {
  describe('createTweet', () => {
    it('Should successfully create new tweet', async () => {
      const result = await createTweet(generateFakeTweet());
      return Promise.all([
        expect(result).toHaveProperty('id'),
        expect(result).toHaveProperty('description'),
        expect(result).toHaveProperty('isPublic'),
        expect(result).toHaveProperty('userId'),
        expect(result).toHaveProperty('createdAt'),
        expect(result).toHaveProperty('updatedAt'),
      ]);
    });
    describe('getOwnTweets', () => {
      it('Should get user own tweets (All) with out passing type', async () => {
        const result = await getOwnTweets({ userId: 1 });
        return Promise.all([expect(result).toBeInstanceOf(Object)]);
      });
      it('Should get user own tweets (All)', async () => {
        const result = await getOwnTweets({ userId: 1, type: 'all' });
        return Promise.all([expect(result).toBeInstanceOf(Object)]);
      });
      it('Should get user own tweets (Public)', async () => {
        const result = await getOwnTweets({ userId: 1, type: 'public' });
        return Promise.all([expect(result).toBeInstanceOf(Object)]);
      });
      it('Should get user own tweets (Private)', async () => {
        const result = await getOwnTweets({ userId: 1, type: 'private' });
        return Promise.all([expect(result).toBeInstanceOf(Object)]);
      });
      it('Should get user own 10 tweets with out passing type with pagination info', async () => {
        const result = await getOwnTweets({ userId: 1, page: 1 });
        return Promise.all([
          expect(result).toHaveProperty('totalItems'),
          expect(result).toHaveProperty('items'),
          expect(result).toHaveProperty('currentPage'),
        ]);
      });
      it('Should get user own 10 tweets(Public) with pagination info', async () => {
        const result = await getOwnTweets({
          userId: 1,
          page: 1,
          type: 'public',
        });
        return Promise.all([
          expect(result).toHaveProperty('totalItems'),
          expect(result).toHaveProperty('items'),
          expect(result).toHaveProperty('currentPage'),
        ]);
      });
      it('Should get user own 10 tweets(Private) with pagination info', async () => {
        const result = await getOwnTweets({
          userId: 1,
          page: 1,
          type: 'private',
        });
        return Promise.all([
          expect(result).toHaveProperty('totalItems'),
          expect(result).toHaveProperty('items'),
          expect(result).toHaveProperty('currentPage'),
        ]);
      });
    });
  });
  describe('getTweetsForNewsFeed', () => {
    it('Should get all news feed tweets for a user without pagination info', async () => {
      const result = await getNewsFeedTweets({
        userId: 1,
      });
      return Promise.all([expect(result).toBeInstanceOf(Object)]);
    });
    it('Should get news feed tweets (10) for a user with pagination info', async () => {
      const result = await getNewsFeedTweets({
        userId: 1,
        page: 1,
      });
      return Promise.all([
        expect(result).toHaveProperty('totalItems'),
        expect(result).toHaveProperty('items'),
        expect(result).toHaveProperty('totalPages'),
        expect(result).toHaveProperty('currentPage'),
      ]);
    });
  });
});
