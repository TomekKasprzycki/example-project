import axios from "axios";
import Category from "../model/Category";
import { mapCategories } from './../Converters/CategoryConverter';

export const getAllCategories = async(): Promise<Category[]> => {

    const response = await axios.get('http://localhost:8080/api/categories/anonymous/getAll', {
        headers: {
            "content-type": "application/json"
        }
    });

    const data = response.data;

    return mapCategories(data);
}
