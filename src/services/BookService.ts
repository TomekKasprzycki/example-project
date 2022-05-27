import Book from "../model/Book";


export const getMyBooks = async (login: string): Promise<Book[]> => {

    const response: Response = await fetch('http://localhost:3001/books', {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
    const data = await response.json();
    const myBookArray = data.map((el: any) => new Book(el.id, el.title, el.authors, el.category, el.score, el. owner, el.bookLented ))
    console.log(myBookArray)
    const myBooksList: Book[] = myBookArray.filer((book: Book) => book.getOwner().getLogin() === login);

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
    const othersBooksList: Book[] = data.books.filer((book: Book) => book.getOwner().getLogin() !== login);

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
    const allBookArray = data.map((el: any) => new Book(el.id, el.title, el.authors, el.category, el.score, el. owner, el.bookLented ))
    console.log(allBookArray)

    return allBookArray;
}