import express from "express";
import { logger } from "../utils/index.js";

export default () => {
  const app = express.Router();

  app.get("/health", (req, res, next) => {
    logger.debug("Health check API hit", { name: "sac" });
    res.send("I am active and listening 👍👍");
  });

  return app;
};
