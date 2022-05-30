import Author from "./../model/Author"

const mapAuthor = (object: any): Author => {

    return new Author(object.id, object.firstName, object.secondName, object.lastName)
}

const mapAuthors = (array: any[]): Author[] => {

    return array.map(object => mapAuthor(object));
}

const mapAuthorFromName = (array: string[], authorsList: Author[]): Author[] => {

    const bookAuthors = new Array<Author>();

    array.forEach(authorName => {
        const author: Author | undefined = authorsList.find(el => (el.getFirstName() + ' ' + el.getLastName()) === authorName);
        if(author) {bookAuthors.push(author)};
    })
     
    return bookAuthors;

}

export { mapAuthor, mapAuthors, mapAuthorFromName }