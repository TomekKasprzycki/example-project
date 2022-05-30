import Author from "../model/Author";
import { mapAuthors } from './../Converters/AuthorConverter';

const getAllAuthors = async(): Promise<Author[]> => {

    const response = await fetch('http://localhost:8080/api/authors/anonymous/getAllAuthors?limit=20&offset=0', {
        method: "GET",
        headers: {
            "content-type":"application/json"
        }
    })

    const data =  await response.json();

    return mapAuthors(data);
} 

export { getAllAuthors };
