import { Sequelize } from "sequelize";
import { logger } from "../utils/index.js";
import config from "../config/index.js";
import SyncModels from "../models/index.js";


let models;
const dbConnect = async () => {
  const sequelize = new Sequelize(
    config.database.name,
    "root",
    config.database.password,
    {
      host: config.database.host,
      dialect: "mysql",
    }
  );
  try {
    await sequelize.authenticate();
    logger.info(`✌️ DB loaded and connected! ${config.database.name}`);
    models = await SyncModels(sequelize);
    return {...models};
  } catch (err) {
    logger.error("Unable to connect to DB", err);
  }
};

export { dbConnect, models };
