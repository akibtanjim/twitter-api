'use strict';

const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

/**
 *  Users Model
 */

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        validate: {
          notEmpty: true,
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
          notEmpty: true,
        },
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        defaultValue: '',
        validate: {
          isEmail: true,
          notEmpty: true,
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '',
      },
      bio: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: '',
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '',
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '',
      },
      website: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '',
        validate: {
          isUrl: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: true,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
        notEmpty: true,
        validate: {
          isIn: [['admin', 'user']],
        },
      },
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          const hashedPassword = await bcrypt.hash(user.password, 10);
          user.password = hashedPassword;
        },
      },
      sequelize,
      timestamps: true,
      modelName: 'user',
    }
  );
  return User;
};
