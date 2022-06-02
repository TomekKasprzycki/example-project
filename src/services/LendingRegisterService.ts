import Book from "../model/Book";
import axios from "axios";

export const setNewRegister = async(book: Book, token: string): Promise<boolean> => {

    const response = await axios.post('http://localhost:8080/api/lendingregister/lendBook', book, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    })

    return response.data;
}