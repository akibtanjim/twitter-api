'use strict';

const Validator = require('validatorjs');

/**
 * Register Custom Validation Rules
 */
Validator.registerImplicit(
  'isValidPassword',
  (value) => {
    if (!value) return true;
    return new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    ).test(value);
  },
  'The :attribute format is invalid.'
);

Validator.registerImplicit(
  'isAlphabetsDotUnderscoreHyphen',
  (value) => /^[A-Za-z? ._-]+$/.test(value),
  'Only alphabets, dot, underscore & hyphen accepted for :attribute'
);

/**
 * List of validation rules
 */
const validationRules = {
  login: {
    email: 'required|email',
    password: 'required|min:8|isValidPassword',
  },
  createUser: {
    email: 'required|email',
    password: 'required|min:8|isValidPassword',
    name: 'required|isAlphabetsDotUnderscoreHyphen',
    role: 'required|in:admin,user',
  },
  updateUser: {
    email: 'required_if:email,|email|required_without_all:name,password,role',
    password:
      'required_if:password,|min:8|isValidPassword|required_without_all:email,name,role',
    name: 'required_if:name,|isAlphabetsDotUnderscoreHyphen|required_without_all:email,password,role',
    role: 'required_if:role,|in:admin,user|required_without_all:email,password,name',
  },
  createTweet: {
    description: 'required',
    isPublic: 'required_if:isPublic,|boolean',
  },
  refreshToken: {
    refreshToken: 'required|string',
  },
  getOwnTweets: {
    type: 'required_if:type,|in:all,public,private',
    page: 'required_if:page,|integer',
  },
  createFollowing: {
    userId: 'required|integer',
  },
};

/**
 * Get validation rules for a specific type
 * @param {*} type
 * @returns object
 */
const getRules = (type) => {
  switch (type) {
    case 'login':
      return validationRules.login;
    case 'createUser':
      return validationRules.createUser;
    case 'updateUser':
      return validationRules.updateUser;
    case 'refreshToken':
      return validationRules.refreshToken;
    case 'createTweet':
      return validationRules.createTweet;
    case 'getOwnTweets':
      return validationRules.getOwnTweets;
    case 'createFollowing':
      return validationRules.createFollowing;
    default:
      return {};
  }
};

/**
 * Validate user reuqest
 * @param {*} req
 * @returns boolean / throw error
 */
const validate = (type, data = {}) => {
  const rules = getRules(type);
  const validation = new Validator(data, rules);
  if (validation.fails()) {
    throw Object.assign({}, new Error(), {
      status: 400,
      data: {},
      errors: validation.errors.all(),
      message: `Invalid Parameter(s): ${Object.keys(validation.errors.all())
        .map((item) => item)
        .join(',')}`,
    });
  }
  return true;
};

module.exports = {
  getRules,
  validate,
};
