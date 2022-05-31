import Book from "../model/Book";
import { mapBooks } from './../Converters/BookConverter';

export const getMyBooks = async (login: string): Promise<Book[]> => {

    const response: Response = await fetch('http://localhost:8080/api/books/mybooks?limit=3&offset=0', {
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

    const response = await fetch('http://localhost:8080/api/books/otherbooks?limit=3&offset=0', {
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

    const response = await fetch('http://localhost:8080/api/books/anonymous/showbooks?limit=10&offset=0', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await response.json();

    console.log(response.headers)

    return mapBooks(data);
}

export const addMyBook = async(book: Book, token: string): Promise<boolean> => {

    const response = await fetch('http://localhost:8080/api/books/addbook', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify(book)
    })
    
    return response.ok
}