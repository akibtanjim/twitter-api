'use strict';

const bcrypt = require('bcrypt');
const { faker } = require('@faker-js/faker');
const { generateFakeUsers } = require('../utils');

module.exports = {
  async up(queryInterface) {
    /**
     * Create Users
     *
     */
    return queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          name: 'admin',
          userName: '@adminuser',
          email: 'admin@xyz.com',
          phone: faker.phone.phoneNumber('###-###-###'),
          bio: faker.lorem.sentence(),
          location: faker.address.streetAddress(true),
          website: faker.internet.url(),
          password: bcrypt.hashSync('#Admin123', 10),
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        ...generateFakeUsers(49),
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
