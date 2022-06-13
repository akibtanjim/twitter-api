'use strict';

// Load Custom Dependencies
const { QueryTypes } = require('sequelize');
const tweetModel = require('../models').tweet;
const db = require('../models');
const {
  getTweetsVisibility,
  getLimitOffset,
  getPaginatedData,
} = require('../utils');

/**
 *  Create Tweet
 * @param {*} description
 * @param {*} isPublic
 * @param {*} userId
 * @returns object (Tweet)
 */
const createTweet = async ({ description, isPublic = true, userId }) =>
  tweetModel
    .create({ description, isPublic, userId })
    .then((response) => response);

/**
 * Get Own Tweets By Type (All/Public/Private)
 * @param {*} userId
 * @param {*} type
 * @returns array
 */
const getOwnTweets = async ({ userId, type = 'all', page = undefined }) => {
  if (page) {
    const { limit, offset } = getLimitOffset(page);
    return tweetModel
      .findAndCountAll({
        where: {
          userId,
          isPublic: getTweetsVisibility(type),
        },
        attributes: ['id', 'description', 'isPublic', 'createdAt', 'updatedAt'],
        order: [['createdAt', 'DESC']],
        limit,
        offset,
      })
      .then((data) => {
        const response = getPaginatedData(data, page, limit);
        return response;
      });
  }
  return tweetModel
    .findAll({
      where: {
        userId,
        isPublic: getTweetsVisibility(type),
      },
      attributes: ['id', 'description', 'isPublic', 'createdAt', 'updatedAt'],
      order: [['createdAt', 'DESC']],
    })
    .then((response) => response);
};

/**
 * Get user news feed tweets
 * @param {*} userId
 * @param {*} type
 * @returns array
 */
const getNewsFeedTweets = async ({ userId, page = undefined }) => {
  const query = `
      SELECT [condition] FROM tweets
        where isPublic = $isPublic AND (userId = $userId OR userId IN (
            SELECT userId FROM followers
            WHERE followers.followedBy = $userId
        ))
      ORDER BY createdAt DESC`;
  if (page) {
    const { limit, offset } = getLimitOffset(page);
    let queryWithPagination = query.replace('[condition]', '*');
    queryWithPagination += ` LIMIT $offset,$limit`;
    return db.sequelize.models.tweet.sequelize
      .query(queryWithPagination, {
        hasJoin: true,
        model: db.sequelize.models.tweet,
        mapToModel: true,
        nest: true,
        raw: true,
        bind: { userId, isPublic: 1, limit, offset },
      })
      .then(async (data) => {
        const countQuery = query.replace('[condition]', 'count(*) as count');
        const result = await db.sequelize.models.tweet.sequelize.query(
          countQuery,
          {
            bind: { userId, isPublic: 1 },
            type: QueryTypes.SELECT,
          }
        );
        const response = getPaginatedData(
          {
            count: result[0].count,
            rows: data,
          },
          page,
          limit
        );
        return response;
      });
  }
  return db.sequelize.models.tweet.sequelize.query(
    query.replace('[condition]', '*'),
    {
      hasJoin: true,
      model: db.sequelize.models.tweet,
      mapToModel: true,
      nest: true,
      raw: true,
      bind: { userId, isPublic: 1 },
    }
  );
};

module.exports = {
  createTweet,
  getOwnTweets,
  getNewsFeedTweets,
};
