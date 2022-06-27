import Book from "./Book";
import { User } from "./User";

class LendingRegister {

    private id: number;
    private user: User;
    private book: Book;
    private dateOfLend: Date;
    private dateOfReturn: Date;

    constructor(id: number, user: User, book: Book, dateOfLend: Date, dateOfReturn: Date) {
        this.id = id;
        this.user = user;
        this.book = book;
        this.dateOfLend = dateOfLend;
        this.dateOfReturn = dateOfReturn;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getId(): number {
        return this.id;
    }

    public setUser(user: User): void {
        this.user = user;
    }

    public getUser(): User {
        return this.user;
    }

    public setBook(book: Book): void {
        this.book = book;
    }

    public getBook(): Book {
        return this.book;
    }

    public setDateOfLend(dateOfLend: Date) {
        this.dateOfLend = dateOfLend;
    }

    public getDateOfLend(): Date {
        return this.dateOfLend;
    }

    public setDateOfReturn(dateOfReturn: Date): void {
        this.dateOfReturn = dateOfReturn;
    }

    public getDateOfReturn(): Date {
        return this.dateOfReturn;
    }

}

export default LendingRegister;