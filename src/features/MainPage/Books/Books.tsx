import React from "react";
import Book from "../../../model/Book";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
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


    const columns: any[] = [
        { id: 'title', 
        label: 'Tytuł',
        minWidth: 170,},
        
        { id: 'cathegory', 
        label: 'Kategoria',
        minWidth: 170, },
        {
            id: 'author',
            label: 'Autor (autorzy)',
            align: 'right',
            minWidth: 170,
        },
        {
            id: 'score',
            label: 'Ocena',
            align: 'right',
            minWidth: 170,
        },
        {
            id: 'owner',
            label: 'Właściciel',
            align: 'right',
            minWidth: 170,
        },
        {
            id: 'bookLend',
            label: 'Dostępność',
            align: 'right',
            minWidth: 170,
        },
    ];

    return (<>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 500 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column: any) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    width={column.minWidth}
                                    
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data.map((book) => {
                            return (
                                <BookRow id={book.getId()} key={book.getId()} book={book} columns={columns} forLend={props.forLend} setIsBookLended={props.setIsBookLended} />
                            );
                        })}
                    </TableBody>
                    <TableFooter>
                        <TableRow >
                            <TableCell colSpan={6}>
                                <PaginationComponent page={props.page}
                                    setPage={props.setPage}
                                    rowsPerPage={props.rowsPerPage}
                                    setRowsPerPage={props.setRowsPerPage}
                                    maxPage={props.maxPage} />
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Paper >

    </>
    );

}

export default Books;