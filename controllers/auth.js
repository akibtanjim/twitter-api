'use strict';

const { errorResponseHandler, successResponseHandler } = require('../helpers');
const { login, logout, refreshUserToken } = require('../services');

/**
 * Login user with email and password
 * @param {*} req
 * @param {*} res
 * @returns object
 */

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await login({ email, password });
    return successResponseHandler(res, response, 'Successfully logged in!');
  } catch (error) {
    return errorResponseHandler(error, req, res);
  }
};

/**
 * logout user
 * @param {*} req
 * @param {*} res
 * @returns object
 */

exports.logout = async (req, res) => {
  try {
    await logout(req);
    return successResponseHandler(res, {}, 'Successfully logged out!');
  } catch (error) {
    return errorResponseHandler(error, req, res);
  }
};

/**
 * User Token Refresh
 * @param {*} req
 * @param {*} res
 * @returns object
 */

exports.tokenRefresh = async (req, res) => {
  try {
    const response = await refreshUserToken(req);
    return successResponseHandler(
      res,
      response,
      'Successfully token refreshed!'
    );
  } catch (error) {
    return errorResponseHandler(error, req, res);
  }
};
