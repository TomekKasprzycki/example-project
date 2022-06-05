import Author from './../model/Author';
import { mapAuthor, mapAuthorFromName } from './AuthorConverter';

describe('AuthorConverter', () => {

    test('Check if database object are converted to Auhor', ()=>{

        const dbObj = {id:1, firstName:"Jan", secondName:"Adam", lastName:"Kowalski"}

        const author: Author = mapAuthor(dbObj);

        expect(author).toEqual(new Author(1,"Jan","Adam","Kowalski"));

    })

})