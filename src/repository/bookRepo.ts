import { books } from '../models/book.js';

async function addBook(book: Omit<NodeJS.Book, 'id'>): Promise<number> {
    const newId = books.length > 0 ? books.pop()!.id + 1 : 1;
    books.push({...book, id: newId});
    return newId;
}

async function getAllBooks(): Promise<NodeJS.Book[]> {
    return books;
}

export default { addBook, getAllBooks };