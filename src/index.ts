import express from 'express';
import dotenv from 'dotenv';
import logger from './config/logger.js';
import healthRouter from './routes/healthRout.js';

dotenv.config();

const app = express();

app.use(healthRouter);

const PORT: number = process.env.PORT ? +process.env.PORT : 3000;

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
})
