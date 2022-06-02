import Author from "../model/Author";
import { mapAuthors } from './../Converters/AuthorConverter';
import axios from "axios";

export const getAllAuthors = async(): Promise<Author[]> => {

    const response = await axios.get(`http://localhost:8080/api/authors/anonymous/getAllAuthors`);
    const data = response.data;

    return mapAuthors(data);
} 

export const saveAuthor = async(author: Author, token: string): Promise<boolean> => {

    const response = await axios.post('http://localhost:8080/api/authors/addauthor', author, {
        headers: {
            "content-type":"application/json",
            "Authorization": token
        }
    });
    console.log(response)

    return response.status === 200;
}
