'use strict';

// Load Custom Dependencies
const tweetModel = require('../models').tweet;
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
  tweetModel.create({ description, isPublic, userId }).then((response) => {
    if (response) {
      return {
        ...response.dataValues,
      };
    }
    return response;
  });

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
module.exports = {
  createTweet,
  getOwnTweets,
};
