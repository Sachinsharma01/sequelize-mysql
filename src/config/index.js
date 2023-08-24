import "dotenv/config";
process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  port: parseInt(process.env.PORT, 10),

  logs: {
    level: process.env.LOG_LEVEL || "silly",
  },
  database: {
    name: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
  },
};
