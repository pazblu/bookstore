import bookRepo from '../repository/bookRepo.js';

function validateBook(book: Omit<NodeJS.Book, 'id'>): boolean {
    if (!book.title || book.title.trim() === '') {
        return false;
    }
    if (!book.author || book.author.trim() === '') {
        return false;
    }
    if (!book.price || book.price <= 0) {
        return false;
    }
    if (!book.printYear || book.printYear <= 999) {
        return false;
    }
    return true;
}

function createBook(book: Omit<NodeJS.Book, 'id'>): Promise<number>  {
    if (!validateBook(book)) {
        throw new Error('Invalid book data');
    }
    return bookRepo.addBook(book);
}

export default {
    createBook,
    validateBook
};