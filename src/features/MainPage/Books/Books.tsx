import React from "react";
import Book from "../../../model/Book";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material'
import BookRow from "./BookRow";
import PaginationComponent from "../../PaginationComponent/PaginationComponent";

const Books: React.FC<{
    data: Book[],
    forLend: boolean,
    page: number,
    setPage: any,
    rowsPerPage: number,
    setRowsPerPage: any,
    maxPage: number,
    setIsBookLended: any
}> = (props): JSX.Element => {



    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        props.setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        props.setRowsPerPage(parseInt(event.target.value, 10));
        props.setPage(0);
    };


    const columns: any[] = [
        { id: 'title', label: 'Tytuł' },
        { id: 'cathegory', label: 'Kategoria' },
        {
            id: 'author',
            label: 'Autor (autorzy)',
            align: 'right'
        },
        {
            id: 'score',
            label: 'Ocena',
            align: 'right',
        },
        {
            id: 'owner',
            label: 'Właściciel',
            align: 'right'
        },
        {
            id: 'bookLend',
            label: 'Dostępność',
            align: 'right'
        },
    ];

    console.log(props.page)
    console.log(props.rowsPerPage)

    return (<>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer >
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column: any) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data.map((book) => {
                            return (
                                <BookRow key={book.getId()} book={book} columns={columns} forLend={props.forLend} setIsBookLended={props.setIsBookLended} />
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            <PaginationComponent page={props.page}
                setPage={props.setPage}
                rowsPerPage={props.rowsPerPage}
                setRowsPerPage={props.setRowsPerPage}
                maxPage={props.maxPage} />
        </Paper >


    </>
    );

}

export default Books;