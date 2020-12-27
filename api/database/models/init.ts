import { DataTypes, Sequelize } from "sequelize";
import { Sneaker } from "./sneaker";


export const initModels = (sequelize: Sequelize) => {
    Sneaker.init({
        id: {
          type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
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
        }
      }, {
        sequelize,
        tableName: 'sneakers',
      });
}