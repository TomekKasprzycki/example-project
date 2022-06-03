import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Grid,
    Typography,
    Button
} from '@mui/material'

const NeedLoginPage: React.FC = () => {

    useEffect(() => {
        document.title="Strona niedostępna dla niezalogowanych użytkowników"
    },[])
    const navigate = useNavigate();

    return(
        <Grid container spacing={5}>
            <Grid item xs={12} textAlign="center">
                <Typography variant="h4">Strona, do której próbujesz się dostać jest tylko dla zalogowanych użytkowników!</Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
                <Typography variant="h5">Jeśli chcesz ją odwiedzić musisz się zalogować. Jeśli nie masz u nas konta, to szybko możesz je założyć!</Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
                <Button type="button" onClick={()=>{ navigate('/') }} sx={{ width: 200 }}>Chcę wrócić do strony głównej</Button>
                <Button type="button" onClick={()=>{ navigate('/login') }} sx={{ width: 200 }}>Chcę się zalogować</Button>
                <Button type="button" onClick={()=>{ navigate('/registration') }} sx={{ width: 200 }}>Chcę założyć konto!</Button>
            </Grid>
        </Grid>
    )
}

export default NeedLoginPage;