import React from "react";
import Author from "../../model/Author";
import {
    Button
} from '@mui/material';

const AddAuthor: React.FC<{ setAddNewAuthor: any }> = (props) => {

    return (<>
    <div>Dodajemy autora</div>
    <Button type="button" onClick={()=>props.setAddNewAuthor(false)}>Zapisz</Button>
    </>)
}

export default AddAuthor;
