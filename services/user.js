'use strict';

// Load Dependencies

const bcrypt = require('bcrypt');

// Load Custom Dependencies
const userModel = require('../models').user;

/**
 * Get All Users
 * @returns array
 */
const getAllUsers = async () =>
  userModel
    .findAll({
      raw: true,
    })
    .then((response) => {
      if (response?.length > 0) {
        return response.map((user) => ({
          ...user,
          password: undefined,
        }));
      }
      return response;
    });

/**
 * Get User By Id / Throw error
 * @param {*} id
 * @returns object
 */
const getUserById = async (id) =>
  userModel.findByPk(id).then((response) => {
    if (response) {
      return {
        ...response.dataValues,
        password: undefined,
      };
    }
    throw Object.assign({}, new Error(), {
      status: 404,
      data: {},
      errors: {
        userId: ['user does not exist'],
      },
      message: `Resource not found`,
    });
  });

/**
 * Check user existance
 * @param {*} email
 * @returns false / throw error
 */
const checkUserExists = async (email) => {
  const user = await userModel.findOne({
    where: {
      email,
    },
    raw: true,
  });
  if (user) {
    throw Object.assign({}, new Error(), {
      status: 400,
      data: {},
      errors: {
        email: ['user already exists'],
      },
      message: `Resource not found`,
    });
  }
  return false;
};
/**
 *  Create User
 * @param {*} name
 * @param {*} email
 * @param {*} password
 * @param {*} role
 * @returns object (user)
 */
const createUser = async ({ name, password, role, email }) => {
  await checkUserExists(email);
  return userModel.create({ name, password, role, email }).then((response) => {
    if (response) {
      return {
        ...response.dataValues,
        password: undefined,
      };
    }
    return response;
  });
};

/**
 * Delete user by id
 * @param {*} id
 * @returns boolean (0/1)
 */
const deleteUserById = async (id) =>
  userModel.destroy({ where: { id } }).then((response) => {
    if (!response) {
      throw Object.assign({}, new Error(), {
        status: 404,
        data: {},
        errors: {
          userId: ['user does not exist'],
        },
        message: `Resource not found`,
      });
    }
    return response;
  });

const updateUserById = async (id, { name, password, role, email }) =>
  userModel
    .update(
      {
        name,
        password: password ? bcrypt.hashSync(password, 10) : undefined,
        role,
        email,
      },
      { where: { id } }
    )
    .then((response) => {
      if (response && Array.isArray(response) && response[0] === 0) {
        throw Object.assign({}, new Error(), {
          status: 404,
          data: {},
          errors: {
            userId: ['user does not exist'],
          },
          message: `Resource not found`,
        });
      }
      return response;
    });

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  checkUserExists,
  deleteUserById,
  updateUserById,
};
