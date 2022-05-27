import Author from "../model/Author";
import { mapAuthors } from './../Converters/AuthorConverter';

const getAllAuthors = async(): Promise<Author[]> => {

    const response = await fetch('http://localhost:3001/authors', {
        method: "GET",
        headers: {
            "content-type":"application/json"
        }
    })

    const data =  await response.json();

    return mapAuthors(data);
} 

export { getAllAuthors };
