import React, { useEffect } from "react";
import {
    Grid, 
    Typography,
    Button
} from '@mui/material';
import { useNavigate } from "react-router-dom";

const PageNotFound: React.FC = () => {

    useEffect(() => {
        document.title="Nie odnaleziono strony o podanym adresie!"
    },[])

    const navigate = useNavigate();

    const handleOnClick = (): void =>{
        navigate('/');
    }

    return (
        <Grid container spacing={10} >
            <Grid item xs={12} textAlign="center">
                <Typography variant="h3" >Przykro nam, ale takiej strony nie ma...</Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
                <Typography variant="body1">Zapraszamy na stronę główną</Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
                <Button type="button" onClick={handleOnClick}>Strona główna</Button>
            </Grid>

        </Grid>
    )

}

export default PageNotFound;