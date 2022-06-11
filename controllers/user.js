'use strict';

const { errorResponseHandler, successResponseHandler } = require('../helpers');
const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
  updateUserById,
} = require('../services');

/**
 * Get All the users
 * @param {*} req
 * @param {*} res
 * @returns array
 */
exports.getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    return successResponseHandler(
      res,
      users,
      'Successfully fetched all users!'
    );
  } catch (error) {
    return errorResponseHandler(error, req, res);
  }
};

/**
 * Get User By Id
 * @param {*} req
 * @param {*} res
 * @returns object
 */
exports.getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await getUserById(userId);
    return successResponseHandler(res, user, 'Successfully fetched user!');
  } catch (error) {
    return errorResponseHandler(error, req, res);
  }
};

/**
 * Save User
 * @param {*} req
 * @param {*} res
 * @returns object(user)
 */
exports.saveUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await createUser({ name, email, password, role });
    return successResponseHandler(res, user, 'Successfully created user!');
  } catch (error) {
    return errorResponseHandler(error, req, res);
  }
};

/**
 * Delete User
 * @param {*} req
 * @param {*} res
 * @returns object
 */
exports.removeUser = async (req, res) => {
  try {
    const { userId } = req.params;
    await deleteUserById(userId);
    return successResponseHandler(res, {}, 'Successfully deleted user!');
  } catch (error) {
    return errorResponseHandler(error, req, res);
  }
};

/**
 * Update User
 * @param {*} req
 * @param {*} res
 * @returns object
 */
exports.modifyUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, email, password, role } = req.body;
    await updateUserById(userId, {
      name,
      email,
      password,
      role,
    });
    return successResponseHandler(res, {}, 'Successfully updated user!');
  } catch (error) {
    return errorResponseHandler(error, req, res);
  }
};
