import * as winston from "winston";
const { combine, timestamp, printf, colorize, align, splat } = winston.format;

const customFormat = printf(({ level, message, timestamp, ...metadata }) => {
  let formatMessage = `[${timestamp}] ${level}: ${message}`;
  if (metadata && JSON.stringify(metadata) !== "{}") {
    formatMessage += JSON.stringify(metadata);
  }
  return formatMessage;
});

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "debug",
  format: combine(
    colorize({ level: true }),
    splat(),
    timestamp({
      format: "YYYY-MM-DD hh:mm:ss.SSS A",
    }),
    customFormat
  ),
  transports: [new winston.transports.Console()],
});

export default logger;
