import bookRepo from '../repository/bookRepo.js';

const genere = ['SCI_FI', 'NOVEL', 'ISTORY', 'MANGA', 'ROMANCE', 'PROFESSIONAL'] 

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
    if (!book.printYear || book.printYear < 1940 || book.printYear > 2025) {
        return false;
    }
    if (book.genre.every((g) => genere.includes(g.toUpperCase()))) {
        return false;
    }
    return true;
}

function createBook(book: Omit<NodeJS.Book, 'id'>): Promise<number>  {
    if (!validateBook(book)) {
        throw new Error('Invalid book data');
    }

    book.genre = book.genre.map((g) => g = g.toUpperCase() as NodeJS.Genre);
    return bookRepo.addBook(book);
}

export default {
    createBook,
};