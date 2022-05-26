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

    constructor(id: number, title: string, authors: Author[], category: Category, score: number, owner: User) {
        this.id = id;
        this.title = title;
        this.authors = authors;
        this.category = category;
        this.score = score;
        this.owner = owner;
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

}

export default Book;