'use strict';

const { getUserById } = require('./user');

// Load Custom Dependencies
const followerModel = require('../models').follower;

/**
 * Check following information existance
 * @param {*} userId
 * @param {*} followedBy
 * @returns false / throw error
 */

const checkFollowingExists = async (userId, followedBy) => {
  const following = await followerModel.findOne({
    where: {
      userId,
      followedBy,
    },
    raw: true,
  });
  if (following) {
    throw Object.assign({}, new Error(), {
      status: 400,
      data: {},
      errors: {
        userId: ['current user already follow this user'],
      },
      message: `Invalid Parameter(s)`,
    });
  }
  return false;
};

/**
 *  Create following
 * @param {*} followedBy
 * @param {*} userId
 * @returns object (following)
 */

const createFollowing = async ({ userId, followedBy }) => {
  await getUserById(userId);
  await checkFollowingExists(userId, followedBy);
  return followerModel
    .create({ userId, followedBy })
    .then((response) => response);
};

module.exports = {
  createFollowing,
  checkFollowingExists,
};
