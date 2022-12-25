const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const Role = sequelize.define(
    "roles",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        role: {
            type: DataTypes.STRING,
        },
        user_email: {
            type: DataTypes.STRING,
        }

    },
    {
        timestamps: false,
    }
);


module.exports = Role;
