import React, { useEffect, useState } from "react";
import User from "../../model/User";
import Book from "./../../model/Book";
import {
    Grid,
    Typography
} from '@mui/material';
import Books from "../MainPage/Books/Books";
import { useAppSelector } from "../../app/hooks";
import { showActiveUser } from "../Login/LoginSlice";
import { showCurrentToken } from "../Login/TokenSlice";
import { getMyBooks, countMyBooks } from './../../services/BookService';

const UserAccounPage: React.FC = () => {

    const user: User = useAppSelector(showActiveUser).activeUser;
    const token: string = useAppSelector(showCurrentToken).currentToken;
    const [books, setBooks] = useState(new Array<Book>());
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [maxPage, setMaxPage] = useState(5);

    useEffect(() => {

        setMaxPage(Math.ceil(21 / rowsPerPage))
        countMyBooks(token).then(res => setMaxPage(Math.ceil(res / rowsPerPage)));
        getMyBooks(token,rowsPerPage, (rowsPerPage * (page - 1))).then(allBooks => setBooks(allBooks));

    }, [page, rowsPerPage])

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4">Twoje dane:</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">Podany email (login): <span>{user.getLogin()}</span></Typography>
                <Typography variant="h6">Twoje imię i nazwisko : <span>{user.getName()}</span></Typography>              
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">Poniżej lista Twoich książek:</Typography>
            </Grid>
            <Grid item xs={12}>
                <Books data={books} 
                       forLend={false} 
                       page={page} 
                       setPage={setPage} 
                       rowsPerPage={rowsPerPage} 
                       setRowsPerPage={setRowsPerPage} 
                       maxPage={maxPage}
                       setIsBookLended={null} />
            </Grid>
        </Grid>
    )

}

export default UserAccounPage;