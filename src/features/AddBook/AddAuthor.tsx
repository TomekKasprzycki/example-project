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

const AddAuthor: React.FC<{ setAddNewAuthor: any }> = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [newAuthor, setNewAuthor] = useState<Author>(new Author(0, "", "", ""));
    const [isFirstNameGiven, setIsFirstNameGiven] = useState(false);
    const [isLastNameGiven, setIsLastNameGiven] = useState(false);
    const inputRef = useRef<null | HTMLInputElement>(null);

    useEffect(() => {
        
    })

    const formHandler = (data: any): void => {
        const createdAuthor = new Author(0,"","","");
        createdAuthor.setFirstName(data.firstName);
        createdAuthor.setSecondName(data.secondName);
        createdAuthor.setLastName(data.lastName);

        setNewAuthor(createdAuthor);
        props.setAddNewAuthor(false)
    }

    const handleFirstNameInput = (event: any): void => {
        if (inputRef.current?.value !== '') {
            setIsFirstNameGiven(true)
        } else {
            setIsFirstNameGiven(false)
        }
    }

    const handleLastNameInput = (event: any): void => {
        if (inputRef.current?.value !== '') {
            setIsLastNameGiven(true)
        } else {
            setIsLastNameGiven(false)
        }
    }

    return (
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
        </Fade>
    )
}

export default AddAuthor;
