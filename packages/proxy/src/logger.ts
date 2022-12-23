import { format, createLogger, transports } from "winston";

const { combine, timestamp, printf } = format;

const customFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp as string} [proxy] ${level}: ${message as string}`;
});

const logger = createLogger({
    level: "debug",
    format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), customFormat),
    transports: [new transports.Console()]
});

export default logger;
