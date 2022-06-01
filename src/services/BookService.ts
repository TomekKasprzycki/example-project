import axios from "axios";
import Book from "../model/Book";
import { mapBooks } from './../Converters/BookConverter';

export const getMyBooks = async (token: string, limit: number, offset: number): Promise<Book[]> => {

    const response = await axios.get('http://localhost:8080/api/books/mybooks?limit=3&offset=0', {
        headers: {
            "content-type": "application/json",
            "Authorization": token
        }
    });
    const data = response.data;
   
    return mapBooks(data);
}

export const getOtherBooks = async (token: string, limit: number, offset: number): Promise<Book[]> => {

    const response = await axios.get(`http://localhost:8080/api/books/otherbooks?limit=${limit}&offset=${offset}`, {
        headers: {
            "content-type": "application/json",
            "Authorization": token
        }
    });
    const data = await response.data;

    return mapBooks(data);
}

export const getAllBooks = async (limit: number, offset: number): Promise<Book[]> => {

    const response = await axios.get(`http://localhost:8080/api/books/anonymous/showbooks?limit=${limit}&offset=${offset}`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.data;

    return mapBooks(data);
}

export const addMyBook = async(book: Book, token: string): Promise<boolean> => {

    const response = await axios.post('http://localhost:8080/api/books/addbook', book, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    });
    
    return response.status === 200;
}

export const updateBook = async(book: Book, token: string): Promise<boolean> => {

    const response = await axios.post('http://localhost:8080/api/books/editbook', book, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    });
    
    return response.status === 200;

}

export const getBooksForLend = async(token: string, limit: number, offset: number): Promise<Book []> => {

    const response = await axios.get(`http://localhost:8080/api/books/booksforlend?limit=${limit}&offset=${offset}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    })
    const data = response.data;

    console.log(response.headers)

    return mapBooks(data);
}