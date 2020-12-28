'use strict';
const {
    Model
} = require('sequelize');

/** Represents a user sneaker */
export class UserSneaker extends Model {
    // optional fields
    userDescription?: string;
    // Automagic fields
    id?: number;
    sneakerId?: number;
    userId?: number;
    createdAt?: Date;
    updatedAt?: Date;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //@ts-ignore
    static associate(models) {
        // define association here
    }
};

// @ts-ignore
module.exports = (sequelize, DataTypes) => {

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
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        userDescription: {
            type: new DataTypes.STRING(128),
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: 'UserSneaker',
    })
    return UserSneaker;
}