import Book from "../model/Book";
import { mapBooks } from './../Converters/BookConverter';

export const getMyBooks = async (token: string, limit: number, offset: number): Promise<Book[]> => {

    const response: Response = await fetch('http://localhost:8080/api/books/mybooks?limit=3&offset=0', {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "Authorization": token
        }
    })
    const data = await response.json();
   
    return mapBooks(data);
}

export const getOtherBooks = async (token: string, limit: number, offset: number): Promise<Book[]> => {

    const response = await fetch(`http://localhost:8080/api/books/otherbooks?limit=${limit}&offset=${offset}`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "Authorization": token
        }
    })
    const data = await response.json();

    return mapBooks(data);
}

export const getAllBooks = async (limit: number, offset: number): Promise<Book[]> => {

    const response = await fetch(`http://localhost:8080/api/books/anonymous/showbooks?limit=${limit}&offset=${offset}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await response.json();

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

export const updateBook = async(book: Book, token: string): Promise<boolean> => {

    const response = await fetch('http://localhost:8080/api/books/editbook', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify(book)
    })
    
    return response.ok

}

export const getBooksForLend = async(token: string, limit: number, offset: number): Promise<Book []> => {

    const response = await fetch(`http://localhost:8080/api/books/booksforlend?limit=${limit}&offset=${offset}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    })
    const data = await response.json();

    console.log(response.headers)

    return mapBooks(data);
}