const path = require("path");

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc"); 

const swaggerSpec = {
    definition: {
        openapi: "3.0.0", 
        info: {
            title: "API REST ADI-UA",
            version: "1.0.0"
        },
    },
    apis: ["./docs/*.doc.js"]
    
}

const swaggerDefinitions = swaggerJsDoc(swaggerSpec)

module.exports = swaggerDefinitions
