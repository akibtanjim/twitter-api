'use strict';

//  Load Dependencies

const { errorResponseHandler } = require('../helpers');
const { validate } = require('../utils');

/**
 * Validate user request
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {*} next() / throws error
 */

const validateRequest =
  (type, valdationSource = 'body') =>
  async (req, res, next) => {
    try {
      validate(type, valdationSource === 'query' ? req.query : req.body);
      await next();
    } catch (error) {
      errorResponseHandler(error, req, res);
    }
  };

module.exports = validateRequest;
