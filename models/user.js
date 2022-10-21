const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
    "users",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        age: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
);

module.exports = User;
