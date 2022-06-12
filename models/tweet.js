'use strict';

const { Model } = require('sequelize');

/**
 *  Tweets Model
 */
module.exports = (sequelize, DataTypes) => {
  class Tweet extends Model {
    static associate(models) {
      this.belongsTo(models.user, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  }
  Tweet.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        validate: {
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      isPublic: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'tweet',
    }
  );
  return Tweet;
};
