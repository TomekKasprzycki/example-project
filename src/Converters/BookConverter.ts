import Book from "./../model/Book";
import { mapAuthors } from './AuthorConverter';
import { mapCategory } from './CategoryConverter';
import { mapUser } from './UserConverter'

const mapBook = (object: any): Book => {

    return new Book(object.id,
                    object.title,
                    mapAuthors(object.authors),
                    mapCategory(object.category),
                    object.score,
                    object.owner,
                    object.bookLended);
}

const mapBooks = (array: any[]): Book[] => {

    return array.map(object => mapBook(object));
}

export { mapBook, mapBooks }