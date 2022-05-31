import React, { useEffect, useState } from "react";
import {
    TableRow,
    TableCell,
    Typography,
    Button
} from '@mui/material';
import User from "../../../model/User";
import Book from "../../../model/Book";
import Author from "../../../model/Author";
import { updateBook } from "../../../services/BookService";

const BookRow: React.FC<{ book: Book, columns: any[], forLend: boolean }> = (props): JSX.Element => {

    const token: string ='';
    const [authors, setAuthors] = useState(new Array<string>());
    const [bookOnScreen, setBookOnScreen] = useState<Book>(props.book);
    const [shouldBookBeUpdated, setShouldBookBeUdated] = useState(false);
    

    useEffect(() => {
        if(shouldBookBeUpdated){
            updateBook(bookOnScreen, token);
        }
    }, [shouldBookBeUpdated])

    useEffect(() => {
        const bookAuthors: Author[] = bookOnScreen.getAuthors();
        const authorsNames: string[] = new Array<string>();

        let result: string = "";
        bookAuthors.forEach(author => {
            result = author.getFirstName() + `${typeof author.getSecondName() !== 'undefined' ? ' ' + author.getSecondName() : '' }` + " " + author.getLastName();
            authorsNames.push(result);
            })
            setAuthors(authorsNames);
        },[])

        const handleBookLendButton = () => {
            props.book.setBookLended(true);
            setShouldBookBeUdated(true);
        }

    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={props.book.getId()}>
            <TableCell key={props.columns[0].id} align={props.columns[0].align}>
                {bookOnScreen.getTitle()}
            </TableCell>
            <TableCell key={props.columns[1].id} align={props.columns[1].align}>
                {bookOnScreen.getCategory().getName()}
            </TableCell>
            <TableCell key={props.columns[2].id} align={props.columns[2].align}>
                {authors.map(author => <Typography variant="body1" >{author}</Typography>)}
            </TableCell>
            <TableCell key={props.columns[3].id} align={props.columns[3].align}>
                {bookOnScreen.getScore()}
            </TableCell>
            <TableCell key={props.columns[4].id} align={props.columns[4].align}>
                {bookOnScreen.getOwner().getName()}
            </TableCell>
            <TableCell key={props.columns[5].id} align={props.columns[5].align}>
                {props.forLend ? <Button type="button" onClick={handleBookLendButton}> Wypożycz</Button>
                : bookOnScreen.isBookLended() ? "Wypożyczona" : "Dostępna"}
            </TableCell>
        </TableRow>
    )

}


export default BookRow;