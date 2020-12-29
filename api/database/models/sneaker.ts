'use strict';
const {
  Model
} = require('sequelize');


export class Sneaker extends Model {
  title!: string;
  description?: string;
  /** Should be generated autoMAGICALLY huehue */
  id?: number;
  imageUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  // @ts-ignore
  // static associate(models) {
  //   // define association here
  // }
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


  // UserSneaker.associate = (models) => {
  //     UserSneaker.hasOne(models.Sneaker, {
  //         foreignKey: 'id',
  //         as: 'sneakerId',
  //         onDelete: 'CASCADE',
  //     });
  //     UserSneaker.hasOne(models.User, {
  //         foreignKey: 'id',
  //         as: 'userId',
  //         onDelete: 'CASCADE',
  //     });
  // }

  // @ts-ignore
  Sneaker.associate = (models) => {
    Sneaker.hasMany(models.UserSneaker, {
      foreignKey: 'sneakerId',
      as: 'sneakers',
      onDelete: 'CASCADE',
    });
  }

  return Sneaker;
}
