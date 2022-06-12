'use strict';

/**
 * Load All Dependencies
 */
const { errorResponseHandler, successResponseHandler } = require('../helpers');
const { createTweet } = require('../services');

/**
 * Save User Tweet
 * @param {*} req
 * @param {*} res
 * @returns object(tweet)
 */
exports.saveTweet = async (req, res) => {
  try {
    const { description, isPublic = true } = req.body;
    const { id: userId } = req.user;
    const tweet = await createTweet({ description, isPublic, userId });
    return successResponseHandler(res, tweet, 'Successfully created tweet!');
  } catch (error) {
    return errorResponseHandler(error, req, res);
  }
};
