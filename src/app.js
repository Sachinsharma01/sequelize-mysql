import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as swaggerUi from "swagger-ui-express";
import { logger } from "./utils/index.js";
import config from "./config/index.js";
import dbConnect from "./loaders/db.js";
import loadApi from "./api/index.js";
import specs from "./swagger.js";

async function startServer() {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  await dbConnect();
  app.use("/api", loadApi());

  // loading swagger doc
  app.use("/api" + "/api-docs/", swaggerUi.serve, swaggerUi.setup(specs));
  app.listen(4000, () => {
    logger
      .info(
        `
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `
      )
      .on("error", (err) => {
        logger.error(err);
        process.exit(1);
      });
  });
  return app;
}

const app = startServer();
