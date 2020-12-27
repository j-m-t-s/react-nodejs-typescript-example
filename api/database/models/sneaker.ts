
import { DataTypes, Model } from "sequelize";
import { sequelize, Sequelize } from ".";

export class Sneaker extends Model {
  public id!: number;
  public title!: string;
  public description: string;
  public imageUrl: string;

  public readonly createdAt!: Date;
}

// Sneaker.init({
//   id: {
//     type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   name: {
//     type: new DataTypes.STRING(128),
//     allowNull: false,
//   },
//   description: {
//     type: new DataTypes.STRING(128),
//     allowNull: true,
//   },
//   imageUrl: {
//     type: new DataTypes.STRING(128),
//     allowNull: true,
//   }
// }, {
//   sequelize,
//   tableName: 'sneakers',
// });