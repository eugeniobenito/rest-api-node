require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnectSqlite } = require("./config/database");
const app = express();

app.use(cors());

dbConnectSqlite();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Escuchando por el puerto ${port}`);
});