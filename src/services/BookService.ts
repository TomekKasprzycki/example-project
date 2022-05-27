import Book from "../model/Book";
import { mapBooks } from './../Converters/BookConverter';

export const getMyBooks = async (login: string): Promise<Book[]> => {

    const response: Response = await fetch('http://localhost:3001/books', {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
    const data = await response.json();
    const myBookArray = mapBooks(data);

    const myBooksList: Book[] = myBookArray.filter((book: Book) => book.getOwner().getLogin() === login);

    return myBooksList;
}

export const getOtherBooks = async (login: string): Promise<Book[]> => {

    const response = await fetch('http://localhost:3001/books', {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
    const data = await response.json();
    const otherBookArray = mapBooks(data);

    const othersBooksList: Book[] = otherBookArray.filter((book: Book) => book.getOwner().getLogin() !== login);

    return othersBooksList;
}

export const getAllBooks = async (): Promise<Book[]> => {

    const response = await fetch('http://localhost:3001/books', {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
    const data = await response.json();

    return mapBooks(data);
}