import Author from './Author';
import Category from './Category';
import User from './User';


class Book {
    private id: number;
    private title: string;
    private authors: Author[];
    private category: Category;
    private score: number;
    private owner: User;
    private bookLended: boolean;

    constructor(id: number, title: string, authors: Author[], category: Category, score: number, owner: User, bookLended: boolean) {
        this.id = id;
        this.title = title;
        this.authors = authors;
        this.category = category;
        this.score = score;
        this.owner = owner;
        this.bookLended = bookLended;
    }

    public setId(id: number): void {    
        this.id = id;
    }

    public getId(): number {
        return this.id;
    }

    public setTitle(title: string) {
        this.title = title;
    }

    public getTitle(): string {
        return this.title;
    }

    public setAuthors(authors: Author[]) {
        this.authors = authors;
    }

    public getAuthors(): Author[] {
        return this.authors;
    }

    public setCategory(category: Category) {
        this.category = category;
    }

    public getCategory(): Category {
        return this.category;
    }

    public setScore(score: number) {
        this.score = score;
    }

    public getScore(): number {
        return this.score;
    }
    
    public setOwner(owner: User) {
        this.owner = owner;
    }

    public getOwner(): User {
        return this.owner;
    }

    public setBookLended(bookLended: boolean): void {
        this.bookLended = bookLended;
    }

    public isBookLended(): boolean {
        return this.bookLended;
    }

}

export default Book;