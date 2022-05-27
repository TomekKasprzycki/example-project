import Category from "./../model/Category";

const mapCategory = (object: any): Category => {
    return new Category(object.id, object.name);
}

const mapCategories = (array: any[]): Category[] => {
    return array.map(object => mapCategory(object));
}

export { mapCategory, mapCategories }