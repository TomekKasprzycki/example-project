import React, { useEffect, useState } from "react";
import { User } from "../../model/User";
import Book from "./../../model/Book";
import {
    Grid,
    Typography
} from '@mui/material';
import Books from "../MainPage/Books/Books";
import { useAppSelector } from "../../app/hooks";
import { showActiveUser } from "../Login/LoginSlice";
import { showCurrentToken } from "../Login/TokenSlice";

const AdminPanel: React.FC = () => {

    const user: User = useAppSelector(showActiveUser).activeUser;
    const token: string = useAppSelector(showCurrentToken).currentToken;
    const [users, setUsers] = useState(new Array<User>());
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [maxPage, setMaxPage] = useState(5);

    useEffect(() => {

        setMaxPage(Math.ceil(21 / rowsPerPage))
        // countUsers(token)
        // showAllUsers(token)

    }, [page, rowsPerPage])

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4">Panel administracyjny</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">Podany email (login): <span>{user.login}</span></Typography>
                <Typography variant="h6">Twoje imię i nazwisko : <span>{user.name}</span></Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">Poniżej lista Użytkowników servisu:</Typography>
            </Grid>
            <Grid item xs={12}>
                <div>List użytkowników!</div>

            </Grid>
        </Grid>
    )
}

export default AdminPanel;
