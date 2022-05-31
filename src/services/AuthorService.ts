import { responseInterceptor } from "http-proxy-middleware";
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

const saveAuthor = async(author: Author, token: string): Promise<boolean> => {

    const response = await fetch('http://localhost:8080/api/authors/addauthor', {
        method: "POST",
        headers: {
            "content-type":"application/json",
            "Authorization": token
        },
        body: JSON.stringify(author)
    })

    return response.ok;
}

export { getAllAuthors };
