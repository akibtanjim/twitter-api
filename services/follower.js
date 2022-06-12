'use strict';

// Load Custom Dependencies
const followerModel = require('../models').follower;

/**
 *  Create following
 * @param {*} followedBy
 * @param {*} userId
 * @returns object (following)
 */
const createFollowing = async ({ userId, followedBy }) =>
  followerModel.create({ userId, followedBy }).then((response) => response);

module.exports = {
  createFollowing,
};
