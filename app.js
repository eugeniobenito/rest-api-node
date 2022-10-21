require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnectSqlite } = require("./config/database");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", require("./routes"));
app.use(cors());

app.listen(port, () => {
    console.log(`Escuchando por el puerto ${port}`);
});

dbConnectSqlite();