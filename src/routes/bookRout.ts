import bookService from "../services/bookService";
import { response, Router } from "express";

const router = Router();

router.post('/book', async (req, res) => {
    const bookData = req.body;

    try {
        const newBook = await bookService.createBook(bookData);

        const response ={ result: newBook };
        res.status(201).json(response);
    } catch (error) {
        if (error instanceof Error) {
            const response = { error: error.message };
            res.status(400).json(response);
        }
}});