'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  // @ts-ignore
  User.associate = (models) => {
    User.hasMany(models.UserSneaker, {
      foreignKey: 'userId',
      as: 'sneakers',
      onDelete: 'CASCADE',
    });
  }
  return User;
};