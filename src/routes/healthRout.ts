import { Router } from "express";
import logger from "../config/logger.js";

const router = Router();

router.get('/health', (req, res) => {
    logger.info('Health check endpoint called');
    res.json({ status: 'ok'});
});

export default router;
