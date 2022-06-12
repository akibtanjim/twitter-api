'use strict';

/**
 *  Tweets Model
 */
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Follower extends Model {
    static associate(models) {
      this.belongsTo(models.user, {
        foreignKey: 'userId',
        as: 'followers',
      });
      this.belongsTo(models.user, {
        foreignKey: 'followedBy',
        as: 'following',
      });
    }
  }
  Follower.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'follower',
    }
  );
  return Follower;
};
