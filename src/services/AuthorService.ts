import Author from "../model/Author";

const getAllAuthors = async(): Promise<Author[]> => {

    const response = await fetch('', {
        method: "GET",
        headers: {
            "content-type":"application/json"
        }
    })

    const data =  await response.json();

    return data;
} 

export { getAllAuthors };
