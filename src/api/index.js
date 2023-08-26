import express from "express";
import { logger } from "../utils/index.js";
import initializeRoutes from "./routes/index.js";

export default () => {
  const app = express.Router();

  app.use(initializeRoutes());  // initialize routes

  app.get("/health", (req, res, next) => {
    logger.debug("Health check API hit", { name: "sac" });
    return res.send("I am active and listening 👍👍");
  });

  return app;
};
