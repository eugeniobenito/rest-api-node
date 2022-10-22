const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const Role = sequelize.define(
    "roles",
    {
        user_email: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        role: {
            type: DataTypes.STRING,
            primaryKey: true,
        }
    },
    {
        timestamps: false
    }
);

module.exports = Role;
