import React from "react";
import Book from "../../../model/Book";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import BookRow from "./BookRow";

const Books = (data: Book[]): JSX.Element => {

    const columns: any[] = [
        { id: 'title', label: 'Tytuł', minWidth: 170 },
        { id: 'cathegory', label: 'Kategoria', minWidth: 100 },
        {
            id: 'author',
            label: 'Autor (autorzy)',
            minWidth: 170,
            align: 'right'
        },
        {
            id: 'score',
            label: 'Ocena',
            minWidth: 170,
            align: 'right',
        },
        {
            id: 'owner',
            label: 'Właściciel',
            minWidth: 170,
            align: 'right'
        },
    ];

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column: any) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((book) => {
                            return (
                                <BookRow key={book.getId()} book={book} columns={columns} />
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );

}

export default Books;