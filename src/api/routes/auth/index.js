import express from "express";
import { celebrate } from "celebrate";
import validations from "./validation.js";
import controller from "./controller.js";

const route = express.Router();
export default (app) => {
  app.use("/auth", route);

  route.get("/login", async (req, res, next) => {
    console.log("login hit");
    return res.status(200).send({ message: "Working" });
  });

  route.post(
    "/signup",
    celebrate({
      body: validations.signup,
    }),
    controller.signup
  );

  route.post(
    "/login",
    celebrate({
      body: validations.login,
    }),
    controller.login
  );
};
