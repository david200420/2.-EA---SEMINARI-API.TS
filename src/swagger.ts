
import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
        title: "My API",
        version: "1.0.0",
        description: "API documentation for my application",
        },
        servers: [
        {
            url: "http://localhost:3000",
        },
        ],
    },
    apis: ["./src/routes/*.ts", "./src/models/*.ts"], // files containing annotations as above
    };  