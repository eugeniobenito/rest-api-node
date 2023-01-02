require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnectSqlite } = require("./config/database");
const app = express();
const port = process.env.PORT || 3000;
const swaggerUI = require("swagger-ui-express");
const swaggerDefinitions = require("./docs/swagger");

app.set('json spaces', 2)
app.use(express.json());
app.use(cors());

app.use("/api", require("./routes"));
app.use("/api/doc", swaggerUI.serve, swaggerUI.setup(swaggerDefinitions));

app.listen(port, () => {
  console.log(`Escuchando por el puerto ${port}`);
});

dbConnectSqlite();