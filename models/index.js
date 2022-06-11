'use strict';

/**
 * Load the dependencies
 */
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

/**
 * Load the config
 */
const dbConfig = require('../config/db');

const basename = path.basename(__filename);

/**
 * Create the db connection
 */

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
    operatorsAliases: 1,
    logging: false,
  }
);

const db = {};
/**
 * Load all the models
 */
fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    db[model.name] = model;
  });
/**
 * Model Associations
 */
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;
module.exports = db;
