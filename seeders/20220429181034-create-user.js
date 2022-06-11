'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    /**
     * Create Admin User
     *
     */
    return queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          name: 'admin',
          email: 'admin@xyz.com',
          password: bcrypt.hashSync('#Admin123', 10),
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {
        ignoreDuplicates: true,
      }
    );
  },

  async down(queryInterface) {
    /**
     * Delete all the users.
     */

    return queryInterface.bulkDelete('users', null, {});
  },
};
