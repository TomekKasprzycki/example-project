import React, { useEffect, useState } from "react";
import { User } from "../../model/User";
import { useAppSelector } from "../../app/hooks";
import { showActiveUser } from "../Login/LoginSlice";
import { getAllBooks, countAllBook } from '../../services/BookService';
import Book from "../../model/Book";
import { Typography, Grid, Fade } from "@mui/material";
import Books from "./Books/Books";

const MainPage: React.FC = (): JSX.Element => {

    useEffect(() => { document.title = "Strona główna" }, []);
    const user: User = useAppSelector(showActiveUser).activeUser;

    const [books, setBooks] = useState(new Array<Book>());
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [maxPage, setMaxPage] = useState(5);

    useEffect(() => {
        setMaxPage(Math.ceil(21 / rowsPerPage))
        countAllBook().then(res => setMaxPage(Math.ceil(res / rowsPerPage)));
        getAllBooks(rowsPerPage, (rowsPerPage * (page - 1))).then(allBooks => setBooks(allBooks));
    }, [user, page, rowsPerPage])

    return (
        <Grid container spacing={2} sx={{ paddingLeft: 2 }}>
            <Grid item xs={12}>
                <Typography variant="h3">Witaj w sąsiedzkiej bibliotece</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1">Lorem ipsum dolor sit amet consectetur adipisicing elit</Typography>
            </Grid>
            <Grid item xs={12} >
                <Typography variant="body1">Eaque illum, repellat officia excepturi vero commodi exercitationem ipsam consequatur numquam autem tempora accusamus dolor nemo voluptatem hic ratione perferendis id placeat.</Typography>
            </Grid>
            <Grid item xs={12}>
                <Fade in={true} timeout={1000}>
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <Typography variant="h1" align="center" sx={{ fontSize: 20 }}>Książki w naszej bibliotece</Typography>
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
                </Fade>
            </Grid>
        </Grid>

    )
}

export default MainPage;
