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
            type: DataTypes.ENUM,
            allowNull: false,
        },
        ingredients2: {
            type: DataTypes.ENUM,
            allowNull: true,
        },
        ingredients3: {
            type: DataTypes.ENUM,
            allowNull: true,
        },
        ingredients4: {
            type: DataTypes.ENUM,
            allowNull: true,
        },
        ingredients5: {
            type: DataTypes.ENUM,
            allowNull: true,
        },
        ingredients6: {
            type: DataTypes.ENUM,
            allowNull: true,
        },
        ingredients7: {
            type: DataTypes.ENUM,
            allowNull: true,
        },
        ingredients8: {
            type: DataTypes.ENUM,
            allowNull: true,
        },
        ingredients9: {
            type: DataTypes.ENUM,
            allowNull: true,
        },
        ingredients10: {
            type: DataTypes.ENUM,
            allowNull: true,
        },
        ingredients11: {
            type: DataTypes.ENUM,
            allowNull: true,
        },
        ingredients12: {
            type: DataTypes.ENUM,
            allowNull: true,
        },
        ingredients13: {
            type: DataTypes.ENUM,
            allowNull: true,
        },
        ingredients14: {
            type: DataTypes.ENUM,
            allowNull: true,
        },
        ingredients15: {
            type: DataTypes.ENUM,
            allowNull: true,
        },
        ingredients16: {
            type: DataTypes.ENUM,
            allowNull: true,
        },
        ingredients17: {
            type: DataTypes.ENUM,
            allowNull: true,
        },
        ingredients18: {
            type: DataTypes.ENUM,
            allowNull: true,
        },
        ingredients19: {
            type: DataTypes.ENUM,
            allowNull: true,
        },
        ingredients20: {
            type: DataTypes.ENUM,
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