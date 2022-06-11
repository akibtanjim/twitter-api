'use strict';

/**
 * Load Dependencies
 */
const Keyv = require('keyv');

/**
 * Create the keyv instance
 */
const keyv = new Keyv();

/**
 * Set Cache
 * @param {*} key
 * @param {*} value
 * @param {*} ttl
 * @returns boolean (true/false)
 */
exports.cacheSet = (key, value, ttl = 0) => keyv.set(key, value, ttl);

/**
 * Get Cache
 * @param {*} key
 * @returns string
 */
exports.cacheGet = (key) => keyv.get(key);
