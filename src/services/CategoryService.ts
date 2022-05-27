import Category from "../model/Category";
import { mapCategories } from './../Converters/CategoryConverter';

const getAllCategories = async(): Promise<Category[]> => {

    const response = await fetch('http://localhost:3001/category', {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    });

    const data = await response.json();

    return mapCategories(data);
}

export { getAllCategories };