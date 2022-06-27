import React, { useEffect, useState } from "react";
import {
    TableRow,
    TableCell,
    Typography,
    Button
} from '@mui/material';
import Book from "../../../model/Book";
import Author from "../../../model/Author";
import { useAppSelector } from "../../../app/hooks";
import { showCurrentToken } from "../../Login/TokenSlice";
import { setNewRegister } from "../../../services/LendingRegisterService"; 

const BookRow: React.FC<{ id:number, book: Book, columns: any[], forLend: boolean, setIsBookLended: any }> = (props): JSX.Element => {

    const token: string = useAppSelector(showCurrentToken).currentToken;
    const [authors, setAuthors] = useState(new Array<string>());
    const [shouldBookBeUpdated, setShouldBookBeUdated] = useState(false);
    

    useEffect(() => {
        if(shouldBookBeUpdated){
            setNewRegister(props.book, token).then(res => console.log("new register set: " + res))
        }
    }, [shouldBookBeUpdated])

    useEffect(() => {
        const bookAuthors: Author[] = props.book.getAuthors();
        const authorsNames: string[] = new Array<string>();

        let result: string = "";
        bookAuthors.forEach(author => {
            result = author.getFirstName() + `${typeof author.getSecondName() !== 'undefined' ? ' ' + author.getSecondName() : '' }` + " " + author.getLastName();
            authorsNames.push(result);
            })
            setAuthors(authorsNames);
        },[])

        const handleBookLendButton = () => {
            setShouldBookBeUdated(true);
            props.book.setBookLended(true);
            props.setIsBookLended(true);
        }

    return (
        <>
        {!shouldBookBeUpdated ?
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
                {props.book.getOwner().name}
            </TableCell>
            <TableCell key={props.columns[5].id} align={props.columns[5].align}>
                {props.forLend ? <Button type="button" onClick={handleBookLendButton}>Pożycz</Button>
                : props.book.isBookLended() ? "Wypożyczona" : "Dostępna"}
            </TableCell>
        </TableRow>:
        <div></div>}
        </>
    )

}


export default BookRow;