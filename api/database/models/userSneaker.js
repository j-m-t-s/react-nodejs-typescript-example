// .createTable('Sneakers', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       description: {
//         type: Sequelize.STRING
//       },
//       title: {
//         type: Sequelize.STRING
//       },
//       imageURL: {
//         type: Sequelize.STRING
//       },
//       dateCreated: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//     });
//     await queryInterface.createTable('UserSneakers', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       userId: {
//         type: Sequelize.INTEGER,
//         references: { model: 'Users', key: 'id' }
//       },
//       sneakerId: {
//         type: Sequelize.INTEGER,
//         references: { model: 'Sneakers', key: 'id' }
//       },
//       email: {
//         type: Sequelize.STRING
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     });




'use strict';
const {
    Model
} = require('sequelize');
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

    class UserSneaker extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    UserSneaker.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED, // you can omit the `new` but this is discouraged
            autoIncrement: true,
            primaryKey: true,
        },
        sneakerId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        dateCreated: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'userSneaker',
    })
    return UserSneaker;
}