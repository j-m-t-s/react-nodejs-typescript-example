'use strict';
const {
  Model
} = require('sequelize');


export class Sneaker extends Model {
  id!: number;
  title!: string;
  description?: string;
  imageUrl?: string;
  dateCreated?: Date;
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  // @ts-ignore
  static associate(models) {
    // define association here
  }
};

// @ts-ignore
module.exports = (sequelize, DataTypes) => {
  // todo: re-type this
  // class Sneaker extends Model {
  //   public id!: number;
  //   public title!: string;
  //   public description: string;
  //   public imageUrl: string;

  //   public readonly createdAt!: Date;
  // }


  Sneaker.init({
    id: {
      type: new DataTypes.INTEGER, // you can omit the `new` but this is discouraged
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    imageUrl: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    createdAt: {
      type: new DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: new DataTypes.DATE,
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'Sneaker',
  })
  return Sneaker;
}
