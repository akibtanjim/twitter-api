'use strict';

/**
 * Load Dependencies
 */
const express = require('express');

/**
 * Load custom dependencies
 */

const {
  getUsers,
  getUser,
  saveUser,
  removeUser,
  modifyUser,
} = require('../controllers');

const { authGaurd, validateRequest, checkIfAdmin } = require('../middlewares');

/**
 * Create Router
 */

const router = express.Router();

/**
 * auth related routes
 */
router.get('/users', [authGaurd], getUsers);
router.get('/users/:userId', [authGaurd], getUser);
router.post('/users', [authGaurd, validateRequest('createUser')], saveUser);
router.delete('/users/:userId', [authGaurd, checkIfAdmin], removeUser);
router.put(
  '/users/:userId',
  [authGaurd, validateRequest('updateUser')],
  modifyUser
);

module.exports = router;
