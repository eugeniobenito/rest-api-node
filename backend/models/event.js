const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const Event = sequelize.define(
    "events",
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
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }
    },
    {
        timestamps: false
    }
);

module.exports = Event;
