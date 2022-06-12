'use strict';

/**
 * Load All Dependencies
 */
const { errorResponseHandler, successResponseHandler } = require('../helpers');
const { createFollowing } = require('../services');

/**
 * Follow user
 * @param {*} req
 * @param {*} res
 * @returns object(following)
 */
exports.follow = async (req, res) => {
  try {
    const { userId } = req.body;
    const { id: followedBy } = req.user;
    if (userId === followedBy) {
      throw Object.assign({}, new Error(), {
        status: 400,
        data: {},
        errors: { userId: ["User can't follow himself"] },
        message: `Invalid Parameter(s): userId`,
      });
    }
    const following = await createFollowing({ userId, followedBy });
    return successResponseHandler(
      res,
      following,
      'Successfully followed user!'
    );
  } catch (error) {
    return errorResponseHandler(error, req, res);
  }
};
