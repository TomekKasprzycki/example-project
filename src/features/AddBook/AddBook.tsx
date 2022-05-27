import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import User from "../../model/User";
import Category from "../../model/Category";
import Author from "../../model/Author";
import {
    TextField,
    Grid,
    Button,
    Typography,
    Select,
    MenuItem
} from '@mui/material';
import { getAllCategories } from './../../services/CategoryService';
import { getAllAuthors } from './../../services/AuthorService';

const AddBook: React.FC<{ user: User }> = (props) => {

    const [categories, setCategories] = useState(new Array<Category>());
    const [addNewAuthor, setAddNewAuthor] = useState(false);
    const [authors, setAuthors] = useState(new Array<Author>());
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        getAllCategories().then(categories => setCategories(categories));
        getAllAuthors().then(authors => setAuthors(authors));
    }, [])

    const formHandler = (data: any): void => {

    }

    return (
        <Grid container spacing={10}>
            <Grid item xs={12} textAlign="center">
                <Typography variant="h3">Poniżej możesz wprowadzić dane swojej książki</Typography>
            </Grid>
            <form onSubmit={handleSubmit(formHandler)} justifi-content="center" >
                <Grid item xs={12} textAlign="center" sx={{ marginBottom: 2 }}>
                    <TextField {...register("login", { required: "requierd" })}
                        id="input-title"
                        type="text"
                        variant="outlined"
                        label="Podaj tytuł książki"
                        inputProps={{ style: { textAlign: "center" } }}
                        helperText={errors.username?.type === 'required' && "Username is requierd"}
                    />
                </Grid>
                <Grid item xs={12} textAlign="center" sx={{ marginBottom: 2 }}>
                    <Select
                        id="input-category-select"
                        value={''}
                        label="Kategoria"
                        // onChange={handleChange}
                    >
                        {categories.map((category) => {return <MenuItem key={category.getId()} value={category.getName()}>{category.getName()}</MenuItem>})}
                    </Select>
                </Grid>
                <Grid item xs={12} textAlign="center" sx={{ marginBottom: 2 }}>
                    <Select
                        id="input-author-select"
                        value={''}
                        label="Podaj autora"
                        // onChange={handleChange}
                    >
                        {categories.map((category) => {return <MenuItem key={category.getId()} value={category.getName()}>{category.getName()}</MenuItem>})}
                    </Select>
                </Grid>


            </form>
        </Grid>
    )
}

export default AddBook;
