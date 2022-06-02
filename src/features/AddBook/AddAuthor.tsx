import React, { useEffect, useRef, useState } from "react";
import Author from "../../model/Author";
import {
    Button,
    Grid,
    TextField,
    Typography,
    Box,
    Fade
} from '@mui/material';
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../app/hooks";
import { showCurrentToken } from "../Login/TokenSlice";
import { saveAuthor } from "./../../services/AuthorService";

const AddAuthor: React.FC<{ setAddNewAuthor: any, setAuthorHasBeenAdded: any }> = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isFirstNameGiven, setIsFirstNameGiven] = useState(false);
    const [isLastNameGiven, setIsLastNameGiven] = useState(false);
    const inputRef = useRef<null | HTMLInputElement>(null);
    const [isAuthorAdded, setIsAuthorAdded] = useState(false);
    const token: string = useAppSelector(showCurrentToken).currentToken;

    useEffect(() => {
        
    })

    const closeAfter2000 = () => {
        setTimeout(() => {
            props.setAddNewAuthor(false)}, 2000)
    }

    const formHandler = (data: any): void => {
        console.log(data)
        const createdAuthor = new Author(0,"","","");
        createdAuthor.setFirstName(data.firstName);
        createdAuthor.setSecondName(data.secondName);
        createdAuthor.setLastName(data.lastName);
        console.log(createdAuthor)
 
        saveAuthor(createdAuthor, token).then(res => setIsAuthorAdded(res))
            props.setAuthorHasBeenAdded(true)
        closeAfter2000();
    }

    const handleFirstNameInput = (): void => {
        if (inputRef.current?.value !== '') {
            setIsFirstNameGiven(true)
        } else {
            setIsFirstNameGiven(false)
        }
    }

    const handleLastNameInput = (): void => {
        if (inputRef.current?.value !== '') {
            setIsLastNameGiven(true)
        } else {
            setIsLastNameGiven(false)
        }
    }

    return (
        !isAuthorAdded ?
        <Fade in={true} timeout={1000}>
            <Box sx={{
                width: 500,
                border: '1px dotted black',
                margin: '0 auto 0 auto',
                backgroundColor: 'primary.light',
                marginTop: 4
            }} >

                <form onSubmit={handleSubmit(formHandler)}>
                    <Grid item xs={12} textAlign="center" sx={{ margin: 2 }}>
                        <Typography variant="h5" >Podaj dane autora:</Typography>
                    </Grid>
                    <Grid item xs={12} textAlign="center" sx={{ marginBottom: 2 }}>
                        <TextField {...register("firstName", { required: "requierd" })}
                            id="input-firstName"
                            type="text"
                            variant="outlined"
                            label="Imię*"
                            inputRef={inputRef}
                            onChange={handleFirstNameInput}
                            sx={{ backgroundColor: 'white' }}
                            inputProps={{ style: { textAlign: "center" } }}
                            helperText={errors.username?.type === 'required' && "Username is requierd"}
                        />
                    </Grid>
                    <Grid item xs={12} textAlign="center" sx={{ marginBottom: 2 }}>
                        <TextField {...register("seconName")}
                            id="input-secondName"
                            type="text"
                            variant="outlined"
                            label="Drugie imię"
                            sx={{ backgroundColor: 'white' }}
                            inputProps={{ style: { textAlign: "center" } }}
                            helperText={errors.username?.type === 'required' && "Username is requierd"}
                        />
                    </Grid>
                    <Grid item xs={12} textAlign="center" sx={{ marginBottom: 2 }}>
                        <TextField {...register("lastName", { required: "requierd" })}
                            id="input-lastName"
                            type="text"
                            variant="outlined"
                            label="Nazwisko*"
                            inputRef={inputRef}
                            onChange={handleLastNameInput}
                            sx={{ backgroundColor: 'white' }}
                            inputProps={{ style: { textAlign: "center" } }}
                            helperText={errors.username?.type === 'required' && "Username is requierd"}
                        />
                    </Grid>

                    <Grid item xs={12} textAlign="center" sx={{ margin: 2 }}>
                        <Button type="submit" variant="outlined"
                            sx={{ backgroundColor: 'primary.dark', color: 'white' }}
                            disabled={!isFirstNameGiven && !isLastNameGiven}
                        >Zapisz autora</Button>
                    </Grid>
                </form>
            </Box>
        </Fade>:
        <Grid container spacing={6}>
            <Grid item xs={12} textAlign="center">
                <Typography variant="h4">Super, udało się dodać autora!</Typography>
            </Grid>
        </Grid>
    )
}

export default AddAuthor;
