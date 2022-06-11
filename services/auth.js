'use strict';

// Load Dependencies
const bcrypt = require('bcrypt');

// Load Custom Dependencies
const {
  createToken,
  verifyToken,
  refreshToken,
  cacheSet,
  cacheGet,
  caclulateCacheTTL,
} = require('../utils');

const userModel = require('../models').user;

/**
 *  Get User By Email or throw error
 * @param {*} email
 * @returns user object / throw error
 */
const getUserByEmail = async (email) =>
  userModel
    .findOne({
      where: {
        email,
      },
      raw: true,
    })
    .then((response) => {
      if (!response) {
        throw Object.assign({}, new Error(), {
          status: 404,
          data: {},
          errors: {
            email: ['user email does not exist'],
          },
          message: `Resource not found`,
        });
      }
      return response;
    });

/**
 * Login User / Throw error
 * @param {*} email
 * @param {*} password
 * @returns object / throw error
 */
const login = async ({ email, password }) => {
  const user = await getUserByEmail(email);

  const { password: userPassword, role, id, name } = user;

  if (!bcrypt.compareSync(password, userPassword)) {
    throw Object.assign({}, new Error(), {
      status: 400,
      data: {},
      errors: {
        password: ['password is incorrect'],
      },
      message: `Invalid Credentials`,
    });
  }

  const token = createToken({ id, name, role, email });
  const { exp: expiresIn } = verifyToken(token);
  const refToken = refreshToken({ id, name, role, email, refresh: true });
  const { exp: refExpiresIn } = verifyToken(refToken);
  return {
    accessToken: {
      token,
      expiresIn,
    },
    refreshToken: {
      token: refToken,
      expiresIn: refExpiresIn,
    },
  };
};

/**
 * Logout User / Throw error
 * @param {*} req
 * @returns boolean / throw error
 */
const logout = async (req) => {
  const {
    token = undefined,
    user: { exp: expiresIn = undefined },
  } = req;

  if (!token && !expiresIn) {
    throw Object.assign({}, new Error(), {
      status: 401,
      data: {},
      errors: {
        accessToken: ['Access token is invalid or expired'],
      },
      message: `Authorization header is missing.`,
    });
  }

  return cacheSet(token, token, caclulateCacheTTL(expiresIn));
};

/**
 * Refresh User Token / Throw error
 * @param {*} req
 * @returns object / throw error
 */
const refreshUserToken = async (req) => {
  const { refreshToken: reqRefToken } = req.body;

  const cacheFound = await cacheGet(reqRefToken);

  if (cacheFound) {
    throw Object.assign({}, new Error(), {
      status: 401,
      data: {},
      errors: {
        refreshToken: ['Refresh token is invalid or expired'],
      },
      message: `Refresh token is invalid or expired`,
    });
  }

  const {
    id,
    name,
    role,
    email,
    refresh = false,
    exp: expiresIn,
  } = verifyToken(reqRefToken);

  if (!refresh) {
    throw Object.assign({}, new Error(), {
      status: 401,
      data: {},
      errors: {
        refreshToken: ['refresh token is invalid or expired'],
      },
      message: `Unauthenticated: refreshToken invalid`,
    });
  }

  await cacheSet(reqRefToken, reqRefToken, caclulateCacheTTL(expiresIn));

  const newToken = createToken({ id, name, role, email });
  const { exp: newExpiresIn } = verifyToken(newToken);
  const refToken = refreshToken({ id, name, role, email, refresh: true });
  const { exp: refExpiresIn } = verifyToken(refToken);
  return {
    accessToken: {
      token: newToken,
      expiresIn: newExpiresIn,
    },
    refreshToken: {
      token: refToken,
      expiresIn: refExpiresIn,
    },
  };
};

module.exports = { login, getUserByEmail, logout, refreshUserToken };
