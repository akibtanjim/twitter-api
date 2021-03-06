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
      location: faker.address.streetAddress(true),
      website: faker.internet.url(),
      password: bcrypt.hashSync('#User123', 10),
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  });

/**
 * Generate N number of fake tweets and return them
 * @param {*} number
 * @returns array
 */

exports.generateFakeTweets = (number) =>
  Array.from(Array(number), (val, index) => index + 1).map(() => ({
    description: faker.lorem.sentence(),
    isPublic: faker.datatype.boolean(),
    userId: Math.floor(Math.random() * (Math.floor(50) - 1 + 1)) + 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));

/**
 * Generate fake tweet and return it
 * @param {*} number
 * @returns object
 */
exports.generateFakeTweet = () => ({
  description: faker.lorem.sentence(),
  isPublic: faker.datatype.boolean(),
  userId: Math.floor(Math.random() * (Math.floor(50) - 1 + 1)) + 1,
  createdAt: new Date(),
  updatedAt: new Date(),
});

/**
 * Generate N number of fake followers and return them
 * @param {*} number
 * @returns array
 */

exports.generateFakeFollowers = (number) =>
  Array.from(Array(number), (val, index) => index + 1).map(() => ({
    userId: Math.floor(Math.random() * (Math.floor(50) - 1 + 1)) + 1,
    followedBy: Math.floor(Math.random() * (Math.floor(50) - 1 + 1)) + 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));

/**
 * Generate fake follow and return it
 * @param {*} number
 * @returns object
 */
exports.generateFakeFollowing = () => ({
  userId: Math.floor(Math.random() * (Math.floor(50) - 1 + 1)) + 1,
  followedBy: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
});
