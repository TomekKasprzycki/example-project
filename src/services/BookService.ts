import Book from "../model/Book";


export const getMyBooks = async(login: string): Promise<Book[]> => {

    const response: Response = await fetch('http://localhost:3001/books', {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
    const data = await response.json();
    const myBooksList: Book[] = data.books.filer((book: Book) => book.getOwner().getLogin() === login);

    return myBooksList;
}

export const getOtherBooks = async(login: string): Promise<Book[]> => {

    const response = await fetch('http://localhost:3001/books', {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
    const data = await response.json();
    const othersBooksList: Book[] = data.books.filer((book: Book) => book.getOwner().getLogin() !== login);

    return othersBooksList;
}