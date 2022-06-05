import Author from "./Author";

describe('Author class', ()=>{

    test('check if author is created and function getFirstName() is working', () => {
    
        const author: Author = new Author(1,"Jan","Adam","Kowalski");
    
        expect(author.getFirstName()).toEqual("Jan");
    })

    test('check if author is created and function getId() is working', () => {
    
        const author: Author = new Author(1,"Jan","Adam","Kowalski");
    
        expect(author.getId()).toEqual(1);
    })
})