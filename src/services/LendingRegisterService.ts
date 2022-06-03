import Book from "../model/Book";
import axios from "axios";
import LendingRegister from "../model/LendingRegister";
import { mapLendingRegisterList } from "../Converters/LendingRegisterConverter";

export const setNewRegister = async(book: Book, token: string): Promise<boolean> => {

    const response = await axios.post('http://localhost:8080/api/lendingregister/lendBook', book, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    })

    return response.data;
}

export const showBooksIBorrowed = async(token: string): Promise<LendingRegister[]> => {
    const response = await axios.get('http://localhost:8080/api/lendingregister/whichbookiborrowed', {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    })

    const register = mapLendingRegisterList(response.data);

    return register;
}