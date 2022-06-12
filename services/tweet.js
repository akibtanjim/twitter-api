'use strict';

// Load Custom Dependencies
const tweetModel = require('../models').tweet;

/**
 *  Create Tweet
 * @param {*} description
 * @param {*} isPublic
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

module.exports = {
  createTweet,
};
