import React, { useEffect, useInsertionEffect, useState } from "react";
import User from "../../model/User";
import { useAppSelector } from "../../app/hooks";
import { showActiveUser } from "../Login/LoginSlice";
import { Navigate } from "react-router-dom";
import { getMyBooks, getOtherBooks } from '../../services/BookService';
import Book from "../../model/Book";
import { Typography, TextField, Button, Grid } from "@mui/material";


const MainPage = (): JSX.Element => {

    useEffect(() => { document.title = "Strona główna" }, []);
    const [myBooks, setMyBooks] = useState(new Array<Book>());
    const [otherBooks, setOtherBooks] = useState(new Array<Book>());
    const user: User = useAppSelector(showActiveUser);
    useEffect(() => {
        getMyBooks(user.getLogin()).then(myBooks => setMyBooks(myBooks))
        getOtherBooks(user.getLogin()).then(otherBooks => setOtherBooks(otherBooks))
    }, [])

    console.log(otherBooks);

    return (
        user.getLogin() !== "" ? 
        <Grid container spacing={5}>
            <Grid item xs={6}>
                <Typography variant="h1" align="center" sx={{ fontSize: 50 }}>Moje książki</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h1" align="center" sx={{ fontSize: 50 }}>Inne książki</Typography>
            </Grid>
        </Grid>
        :
        <Navigate to="/" />
    )
}

export default MainPage;
