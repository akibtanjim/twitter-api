'use strict';

const { errorResponseHandler } = require('../helpers');
const { cacheGet } = require('../utils');
const jwt = require('../utils/jwt');

/**
 * Verify user's JWT token
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns next() / throws error
 */
module.exports = async (req, res, next) => {
  let token = req.headers.authorization;
  if (token && token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }
  if (token) {
    try {
      token = token.trim();

      const isAlreadyUsed = await cacheGet(token);

      if (isAlreadyUsed) {
        throw Object.assign({}, new Error(), {
          status: 401,
          data: {},
          errors: {
            accessToken: ['access token already used'],
          },
          message: `Unauthenticated: access token already used`,
        });
      }

      const decoded = await jwt.verifyToken(token);
      req.user = decoded;
      req.token = token;
      return next();
    } catch (error) {
      if (error.message === 'Unauthenticated: access token already used') {
        return errorResponseHandler(error, req, res);
      }
      return errorResponseHandler(
        {
          status: 401,
          data: {},
          errors: {
            accessToken: 'Access token is invalid or expired',
          },
          message: `Unauthenticated: ${error.message}`,
        },
        req,
        res
      );
    }
  } else {
    return errorResponseHandler(
      {
        status: 400,
        data: {},
        errors: {
          accessToken: 'No accessToken provided',
        },
        message: `Authorization header is missing.`,
      },
      req,
      res
    );
  }
};
