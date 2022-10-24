const { Sequelize } = require("sequelize");

const database = process.env.SQLITE_DATABASE;
const username = process.env.SQLITE_USER;
const password = process.env.SQLITE_PASSWORD;
const host = process.env.SQLITE_HOST;


// const sequelize = new Sequelize(
//     database,
//     username,
//     password,
//     {
//         dilect: "sqlite",
//         host: "./dev.sqlite"
//     }
// )

const sequelize = new Sequelize("api-adi", "user", "password",
    {
        dialect: "sqlite",
        host: "./dev.sqlite"
    });

const dbConnectSqlite = async () => {
    try {
        await sequelize.sync({ force: true }).then(
            () => console.log("TODO OK CON LA BASE DE DATOS"));
    } catch (e) {
        console.log('SQLITE Error de Conexión', e);
    }
};

module.exports = {sequelize, dbConnectSqlite};



// module.exports = sequelize