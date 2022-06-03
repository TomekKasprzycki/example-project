import React from "react";
import LendingRegister from "../../model/LendingRegister";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import LendingRegisterRow from './LendingRegisterRow';

const LendingRegisterTable: React.FC<{ myBorrowedBooks: LendingRegister[], setReturnBook: any }> = (props) => {

    const columns = [
        {
            id: 1,
            align: 'right',
            minWidth: 170,
            label: 'Tytuł książki'
        },
        {
            id: 2,
            align: 'right',
            minWidth: 170,
            label: 'Właściciel'
        },
        {
            id: 3,
            align: 'right',
            minWidth: 170,
            label: 'Data wypożyczenia'
        },
        {
            id: 4,
            align: 'right',
            minWidth: 170,
            label: 'Data oddania'
        },
        {
            id: 5,
            align: 'right',
            minWidth: 170,
            label: 'Oddaj'
        }
    ]

    return (
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
                        {props.myBorrowedBooks.map((register) => {
                            return (
                                <LendingRegisterRow key={register.getId()} register={register} columns={columns}  setReturnBook={props.setReturnBook} />
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper >
    )
}

export default LendingRegisterTable;