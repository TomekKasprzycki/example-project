import Category from "./../model/Category";

const mapCategory = (object: any): Category => {
    return new Category(object.id, object.name);
}

const mapCategories = (array: any[]): Category[] => {
    return array.map(object => mapCategory(object));
}

const mapCategoryById = (id: number, categories: Category[]): Category => {
    
    let category: Category = new Category(0,"");
    let unknown: any = categories.find(category => category.getId() === id);
    
    category = unknown;
    
        
    return category
}

export { mapCategory, mapCategories, mapCategoryById }