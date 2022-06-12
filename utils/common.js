'use strict';

/**
 * Load Dependencies
 */

const { Op } = require('sequelize');

/**
 *
 * @param {*} type
 * @returns isPublic (value)
 */
exports.getTweetsVisibility = (type) => {
  switch (type) {
    case 'public':
      return 1;
    case 'private':
      return 0;
    default:
      return {
        [Op.in]: [0, 1],
      };
  }
};

/**
 *
 * @param {*} page
 * @param {*} size
 * @returns object (limit,offset)
 */
exports.getLimitOffset = (page = 1, size = 10) => {
  const limit = size ? +size : 10;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};
/**
 *
 * @param {*} data
 * @param {*} page
 * @param {*} limit
 * @param {*} fieldName
 * @returns object
 */
exports.getPaginatedData = (data, page, limit) => {
  const { count: totalItems, rows: items } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  return { totalItems, items, totalPages, currentPage };
};
