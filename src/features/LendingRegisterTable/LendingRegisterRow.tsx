import React from "react";
import LendingRegister from "../../model/LendingRegister";
import {
    TableRow,
    TableCell,
    Button
} from '@mui/material';


const LendingRegisterRow: React.FC<{ register: LendingRegister, setReturnBook: any, columns: any }> = (props) => {

const handleReturnBookButton = () => {
    alert("To będzie zronione soon(tm)");
}

const niceLookingDate = (isoString: string): string => {
    const date = new Date(isoString);

    return `${date.getDay()}-${date.getMonth()}-${date.getFullYear()} o godzinie ${date.getHours()}:${date.getMinutes()}`; //przetestować
}

niceLookingDate(props.register.getDateOfLend().toString());


return(
    <TableRow hover role="checkbox" tabIndex={-1} key={props.register.getId()}>
    <TableCell key={props.columns[0].id} align='right'>
        {props.register.getBook().getTitle() }
    </TableCell>
    <TableCell key={props.columns[1].id} align='right'>
        {props.register.getUser().getName()}
    </TableCell>
    <TableCell key={props.columns[2].id} align='right'>
        {niceLookingDate(props.register.getDateOfLend().toString())}
    </TableCell>
    <TableCell key={props.columns[3].id} align='right'>
        {props.register.getDateOfReturn() === null ? 'Jeszcze nie oddana' : niceLookingDate(props.register.getDateOfReturn().toString())}  {/* przetestować */}
    </TableCell>
    <TableCell key={props.columns[4].id} align='right'>
        <Button type="button" onClick={handleReturnBookButton}>Oddaj</Button>
    </TableCell>
</TableRow>
)

}

export default LendingRegisterRow;
