import React, { useEffect, useState } from "react";
import Books from "../MainPage/Books/Books";
import Book from "../../model/Book";
import { getBooksForLend, countBookForLend } from './../../services/BookService';

import {
    Grid,
    Typography
} from '@mui/material';
import { useAppSelector } from "../../app/hooks";
import { showCurrentToken } from "../Login/TokenSlice";



const LendBook: React.FC = () => {

    const token: string = useAppSelector(showCurrentToken).currentToken;
    const [isBookLended, setIsBookLended] = useState(false);
    const [booksForLend, setBookForLend] = useState<Book[]>(new Array<Book>())
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [maxPage, setMaxPage] = useState(0);

    useEffect(() => {
        document.title = "Wypożyczanie książek";
    }, [])

    useEffect(() => {
        countBookForLend(token).then(res => setMaxPage(Math.ceil(res / rowsPerPage)));
        getBooksForLend(token, rowsPerPage, (rowsPerPage * (page - 1))).then(res => setBookForLend(res));
    }, [isBookLended, page, rowsPerPage])

    return (
        <Grid container spacing={6} >
            <Grid item xs={12} textAlign="center">
                <Typography variant="h4">No to wypożyczamy!</Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
                <Typography variant="body1">Jeśli chcesz wypożyczyć książkę, to po prostu kliknij 'Wypożycz'. Wtedy książka zmieni status na 'wypozyczona' i zniknie z rejestru książek do wypożyczenia. Właściciel ksiązki otrzyma maila z informacją o wypożyczeniu i namiarem na Ciebie (Twój email). Przekazanie książki powinno nastąpić terminie do 3 dni, ale możecie umówić się na dowolny termin. W końcu z sąsiadem jakoś można się dogadać!</Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
                Wypożyczone książki, co do zasady, trzymamy u siebie nie dłużej niż miesiąc, ale, jak napisano powyżej, z sąsiadem można się umówić na inny okres. Jednak warto trzymać się tego miesiąca, bo inni sąsiedzi też może chcieli by tą książę przeczytać!
            </Grid>
            <Grid item xs={12} textAlign="center">
                <Books key={1}
                    data={booksForLend}
                    forLend={true}
                    page={page}
                    setPage={setPage}
                    rowsPerPage={rowsPerPage}
                    setRowsPerPage={setRowsPerPage}
                    maxPage={maxPage}
                    setIsBookLended={setIsBookLended} />
            </Grid>


        </Grid>
    )

}


export default LendBook;