import express from "express";
import auth from "./auth/index.js";

function initializeRoutes() {
  const app = express.Router();

  //invoke all route functions here
  auth(app);

  return app;
}

export default initializeRoutes;
