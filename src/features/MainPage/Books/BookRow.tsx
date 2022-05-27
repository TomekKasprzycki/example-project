import React, { useEffect, useState } from "react";
import { 
    TableRow, 
    TableCell, 
    Typography 
} from '@mui/material';
import {

} from '@mui/icons-material';
import User from "../../../model/User";
import Book from "../../../model/Book";
import Author from "../../../model/Author";

const BookRow: React.FC<{ book: Book, columns: any[] }> = (props): JSX.Element => {

    const [authors, setAuthors] = useState(new Array<string>());
    useEffect(() => {
        const bookAuthors: Author[] = props.book.getAuthors();
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

    console.log(props.book);
    console.log(`Tuuu ${typeof (props.book.getTitle())}`);

    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={props.book.getId()}>
            <TableCell key={props.columns[0].id} align={props.columns[0].align}>
                {props.book.getTitle()}
            </TableCell>
            <TableCell key={props.columns[1].id} align={props.columns[1].align}>
                {props.book.getCategory().getName()}
            </TableCell>
            <TableCell key={props.columns[2].id} align={props.columns[2].align}>
                {authors.map(author => <Typography variant="body1" >{author}</Typography>)}
            </TableCell>
            <TableCell key={props.columns[3].id} align={props.columns[3].align}>
                {props.book.getScore()}
            </TableCell>
            <TableCell key={props.columns[4].id} align={props.columns[4].align}>
                {props.book.getOwner().getName()}
            </TableCell>
            <TableCell key={props.columns[5].id} align={props.columns[5].align}>
                {props.book.isBookLented() ? "Wypożyczona" : "Dostępna" }
            </TableCell>
        </TableRow>
    )

}


export default BookRow;