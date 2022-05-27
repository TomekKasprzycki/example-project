import React, { useEffect, useInsertionEffect, useState } from "react";
import User from "../../model/User";
// import { useAppSelector } from "../../app/hooks";
// import { showActiveUser } from "../Login/LoginSlice";
import { Navigate } from "react-router-dom";
import { getMyBooks, getOtherBooks, getAllBooks } from '../../services/BookService';
import Book from "../../model/Book";
import { Typography, TextField, Button, Grid, Fade } from "@mui/material";
import Books from "./Books/Books";


const MainPage: React.FC<{ user: User }> = (props): JSX.Element => {

    const [showBooks, setShowBooks] = useState(false);

    const user: User = props.user;

    useEffect(() => { document.title = "Strona główna" }, []);
    const [myBooks, setMyBooks] = useState(new Array<Book>());
    const [otherBooks, setOtherBooks] = useState(new Array<Book>());
    // const user: User = useAppSelector(showActiveUser);
    console.log(user)
    useEffect(() => {
        if (user.getId() === 0) {
            getAllBooks().then(allBooks => setOtherBooks(allBooks));
        } else {
            getMyBooks(user.getLogin()).then(myBooks => setMyBooks(myBooks));
            getOtherBooks(user.getLogin()).then(otherBooks => setOtherBooks(otherBooks));
        }
    }, [user])

    return (
        <Grid container spacing={5} sx={{ padding: 2 }}>
            <Grid item xs={12}>
                <Typography variant="h2">Witaj sąsiedzkiej bibliotece</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1">Lorem ipsum dolor sit amet consectetur adipisicing elit</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">Eaque illum, repellat officia excepturi vero commodi exercitationem ipsam consequatur numquam autem tempora accusamus dolor nemo voluptatem hic ratione perferendis id placeat.</Typography>
            </Grid>
            <Grid item xs={12}>
                <Fade in={!showBooks} timeout={1000}>
                    <Grid container spacing={2}>
                        {user.getId() !== 0 && <Grid item xs={6}>
                            <Typography variant="h1" align="center" sx={{ fontSize: 20 }}>Moje książki</Typography>
                            <Books data={myBooks} />
                        </Grid>}
                        <Grid item xs={user.getId() === 0 ? 12 : 6}>
                            <Typography variant="h1" align="center" sx={{ fontSize: 20 }}>Inne książki</Typography>
                            <Books data={otherBooks} />
                        </Grid>
                    </Grid>
                </Fade>
            </Grid>
        </Grid>

    )
}

export default MainPage;
