import bookService from "../services/bookService.js";
import { Router } from "express";
import logger from "../config/logger.js";

const router = Router();

router.post('/book', async (req, res) => {
    logger.info("in POST /book");
    const bookData = req.body;

    try {
        const newBook = await bookService.createBook(bookData);

        const response ={ result: newBook };
        logger.info("End POST /book");
        res.status(201).json(response);
    } catch (error) {
        if (error instanceof Error) {
            const response = { error: error.message };
            logger.error(error.message);
            res.status(400).json(response);
        }
}});


export default router