import React, { useEffect, useState } from "react";
import { TableRow, TableCell, Typography } from '@mui/material';
import User from "../../../model/User";
import Book from "../../../model/Book";
import Author from "../../../model/Author";

const BookRow = (book: Book, columns: any[]): JSX.Element => {

    const [authors, setAuthors] = useState(new Array<string>());
    useEffect(() => {
        const bookAuthors: Author[] = book.getAuthors();
        const authorsNames: string[] = new Array<string>();
        let key: keyof Author;

        bookAuthors.forEach(author => {
            let result: string = "";
            for (key in author) {
                if (typeof (key) !== 'number') {
                    result = result + " " + author[key];
                }
            }
            authorsNames.push(result);
        })
        setAuthors(authorsNames);
    })


return (
    <TableRow hover role="checkbox" tabIndex={-1} key={book.getId()}>
        <TableCell key={columns[0].id} align={columns[0].align}>
            {book.getTitle()}
        </TableCell>
        <TableCell key={columns[1].id} align={columns[1].align}>
            {book.getCategory().getName()}
        </TableCell>
        <TableCell key={columns[2].id} align={columns[2].align}>
            {authors.map(author => <Typography variant="body1" >{author}</Typography>)}
        </TableCell>
        <TableCell key={columns[3].id} align={columns[3].align}>
            {book.getScore()}
        </TableCell>
        <TableCell key={columns[4].id} align={columns[4].align}>
            {book.getOwner().getName()}
        </TableCell>
    </TableRow>
)

}


export default BookRow;