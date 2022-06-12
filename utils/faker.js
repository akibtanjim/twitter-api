'use strict';

/**
 * Load Dependencies
 */

const bcrypt = require('bcrypt');
const { faker } = require('@faker-js/faker');

/**
 * Generate N number of fake users and return them
 * @param {*} number
 * @returns array
 */

exports.generateFakeUsers = (number) =>
  Array.from(Array(number), (val, index) => index + 1).map(() => {
    const name = faker.name.findName();
    return {
      name,
      userName: `@${String(
        faker.internet.userName(name.split(' ')[0], name.split(' ')[1])
      ).toLowerCase()}`,
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber('###-###-###'),
      bio: faker.lorem.sentence(),
      image: faker.internet.avatar(),
      location: faker.address.streetAddress(true),
      website: faker.internet.url(),
      password: bcrypt.hashSync('#User123', 10),
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  });
