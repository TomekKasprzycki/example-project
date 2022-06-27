import React, { useState } from "react";
import LendingRegister from "../../model/LendingRegister";
import {
    TableRow,
    TableCell,
    Button
} from '@mui/material';
import { returnBook } from './../../services/LendingRegisterService';
import { useAppSelector } from "../../app/hooks";
import { showCurrentToken } from "../Login/TokenSlice";


const LendingRegisterRow: React.FC<{ register: LendingRegister, setReturnBook: any, columns: any }> = (props) => {

const token = useAppSelector(showCurrentToken).currentToken;
const [bookHasBeenReturned, setBookHasBeenReturned] = useState(false);
   
const handleReturnBookButton = (): void => {
    props.setReturnBook(true); 
    returnBook(props.register, token).then(res => setBookHasBeenReturned(res));
}       

const niceLookingDate = (isoString: string): string => {
    const date = new Date(isoString);
    const minutes: string = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes().toString();

    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} o godzinie ${date.getHours()}:${minutes}`; //przetestować
}

niceLookingDate(props.register.getDateOfLend().toString());

return(
    <TableRow hover role="checkbox" tabIndex={-1} key={props.register.getId()}>
    <TableCell key={props.columns[0].id} align='right'>
        {props.register.getBook().getTitle() }
    </TableCell>
    <TableCell key={props.columns[1].id} align='right'>
        {props.register.getUser().name}
    </TableCell>
    <TableCell key={props.columns[2].id} align='right'>
        {niceLookingDate(props.register.getDateOfLend().toString())}
    </TableCell>
    <TableCell key={props.columns[3].id} align='right'>
        {props.register.getDateOfReturn() === null ? 'Jeszcze nie oddana' : niceLookingDate(props.register.getDateOfReturn().toString())}  {/* przetestować */}
    </TableCell>
    <TableCell key={props.columns[4].id} align='right'>
        {props.register.getDateOfReturn() !== null ? 'Książka zwrócona' : <Button disabled={bookHasBeenReturned} type="button" onClick={handleReturnBookButton}>{bookHasBeenReturned ? 'Zwrócono' : 'Oddaj'}</Button>}
    </TableCell>
</TableRow>
)

}

export default LendingRegisterRow;
