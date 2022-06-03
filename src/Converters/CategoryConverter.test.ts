import Category from "../model/Category";
import { mapCategory, mapCategoryById } from './CategoryConverter';

describe('Category mappers', ()=>{

    test('check if database objest is mapped to Category', ()=>{

        const dbObject: any = {
            id: 1,
            name: "fantasy"
        }

        const category: Category = mapCategory(dbObject);

        expect(category).toEqual(new Category(1,"fantasy"));
    })

    test('check if number (id) will be mapped to array Categories', ()=>{
        const number: number = 1;

        const categories: Category[] = [new Category(1, "fantasy"), new Category(2,"since-fiction")]

        const category: Category = mapCategoryById(number, categories);
        expect(category).toEqual(new Category(1, "fantasy"));
    })



})