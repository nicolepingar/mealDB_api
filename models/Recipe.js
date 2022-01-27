const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model { }

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false,
        },
        area: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        instructions: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredients1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredients2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ingredients3: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ingredients4: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ingredients5: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ingredients6: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ingredients7: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ingredients8: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ingredients9: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ingredients10: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ingredients11: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ingredients12: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ingredients13: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ingredients14: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ingredients15: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ingredients16: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ingredients17: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ingredients18: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ingredients19: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ingredients20: {
            type: DataTypes.STRING, allowNull: true,
        },
        meas1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        meas2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        meas3: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        meas4: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        meas5: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        meas6: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        meas7: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        meas8: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        meas9: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        meas10: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        meas11: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        meas12: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        meas13: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        meas14: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        meas15: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        meas16: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        meas17: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        meas18: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        meas19: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        meas20: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe',
    }
);

module.exports = Recipe;