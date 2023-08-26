import { logger } from "../../../utils/index.js";
import { models } from "../../../loaders/db.js";
import { APIResponse } from "../../../utils/index.js";

async function signup(req, res, next) {
  try {
    logger.info("signup API starts here with body ", req.body);
    const { name, email } = req.body;
    let userObj = {
      name,
      email,
    };
    req.body.phone ? (userObj.phone = req.body.phone) : null;

    logger.info("create user DB query object ", userObj);

    const user = await models.user.create({
      ...userObj,
    });
    logger.debug("DB response ", user);

    return APIResponse.badRequest(res, "User created Successfully! ✅", user);
  } catch (err) {
    logger.error("signup API fails with error %o", err);
    return APIResponse.badRequest(res, "Something went wrong!", {});
  }
}

async function login(req, res, next) {
  try {
    logger.info("login API starts here with body", req.body);
    let query = {
      attributes: ["name", "email", "id", "phone"],
      where: {
        email: req.body.email,
        phone: req.body.phone,
      },
    };
    req.body.name ? (query.name = req.body.name) : null;
    logger.debug("DB query object ", query);
    const user = await models.user.findAll(query);
    logger.info("user details from DB ", user);
    return APIResponse.success(res, "User fetched successfully", user);
  } catch (err) {
    logger.error("login API fails with error %o", err);
    return APIResponse.badRequest(res, "Something went wrong!", {});
  }
}

export default {
  signup,
  login,
};
