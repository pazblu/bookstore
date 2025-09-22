import { createLogger, format, transports } from 'winston';
import dotenv from 'dotenv';

dotenv.config();

const logger = createLogger({
    level: process.env.LOG_LEVEL ?? 'info',
    format: format.combine(
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        })
    ),
    transports: [new transports.Console()],

})

export default logger;