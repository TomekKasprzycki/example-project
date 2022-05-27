import Author from "./../model/Author"

const mapAuthor = (object: any): Author => {

    return new Author(object.id, object.firstName, object.seconName, object.lastName)
}

const mapAuthors = (array: any[]): Author[] => {

    return array.map(object => mapAuthor(object));
}

export { mapAuthor, mapAuthors }