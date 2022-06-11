'use strict';

const { errorResponseHandler } = require('../helpers');

/**
 * Check if user is admin or not
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns next() / throws error
 */
module.exports = async (req, res, next) => {
  if (req?.user) {
    if (req?.user?.role === 'admin') {
      return next();
    }
    return errorResponseHandler(
      {
        status: 401,
        data: {},
        errors: {
          accessToken: 'Access token is for invalid this action',
        },
        message: `Unauthenticated: You are not an admin`,
      },
      req,
      res
    );
  }
  return errorResponseHandler(
    {
      status: 403,
      data: {},
      errors: {
        accessToken: 'Access token is invalid for this action',
      },
      message: `Access denied: You are not an admin`,
    },
    req,
    res
  );
};
