import swaggerJsdoc from "swagger-jsdoc";
const options = {
  apis: ["**/*.ts"],
  basePath: "http:localhost:5050/api",
  swaggerDefinition: {
    info: {
      description: "Sequelize Learning",
      swagger: "3.0",
      title: "Sequelize Learning with Mysql ✌🏼✌🏼",
      version: "1.0.0",
    },
  },
};
let specs = swaggerJsdoc(options);

export default specs;
