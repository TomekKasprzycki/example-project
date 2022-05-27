import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import User from "../../model/User";
import Category from "../../model/Category";
import Author from "../../model/Author";
import AddAuthor from './AddAuthor';
import {
    TextField,
    Grid,
    Button,
    Typography,
    Select,
    MenuItem,
    InputLabel,
    SelectChangeEvent,
    FormControl,
    OutlinedInput
} from '@mui/material';
import { getAllCategories } from './../../services/CategoryService';
import { getAllAuthors } from './../../services/AuthorService';
import { Theme, useTheme } from "@mui/material/styles";



const AddBook: React.FC<{ user: User }> = (props) => {

    const [categories, setCategories] = useState(new Array<Category>());
    const [addNewAuthor, setAddNewAuthor] = useState(false);
    const [authors, setAuthors] = useState(new Array<Author>());
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [chosenAuthor, setChosenAuthor] = useState(new Array<string>())
    const [chosenCategory, setChosenCategory] = useState('');
    const theme = useTheme();

    useEffect(() => {
        getAllCategories().then(categories => setCategories(categories));
        getAllAuthors().then(authors => setAuthors(authors));
    }, [])

    const formHandler = (data: any): void => {

    }

    const handleChangeCategory = (event: SelectChangeEvent): void => {
        setChosenCategory(event.target.value)
    }

    const handleChangeAuthors = (event: SelectChangeEvent<typeof chosenAuthor>) => {
        let value: any = event.target.value;
        setChosenAuthor(typeof value === 'string' ? value.split(',') : value,);
    }

    const getStyles = (name: string, personName: string[], theme: Theme) => {
        return {
            fontWeight:
                personName.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    const handleAddAuthorBtn = ():void => {
        setAddNewAuthor(true);
    }

    return (
        <Grid container spacing={10} >
            <Grid item xs={12} textAlign="center">
                <Typography variant="h4">Poniżej możesz wprowadzić dane swojej książki</Typography>
            </Grid>
            <Grid item xs={12}>
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
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="input-category-select">Kategoria</InputLabel>
                            <Select {...register("category", { required: "requierd" })}
                                labelId="input-category-select"
                                id="input-category-select"
                                value={chosenCategory}
                                input={<OutlinedInput label="Kategoria" />}
                                sx={{ width: 200 }}
                                onChange={handleChangeCategory}
                            >
                                {categories.map((category) => { return <MenuItem key={category.getId()} value={category.getId()}>{category.getName()}</MenuItem> })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} textAlign="center" sx={{ marginBottom: 2 }}>
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="multiple-name-label">Autor (autorzy)</InputLabel>
                            <Select
                                labelId="multiple-name-label"
                                id="multiple-name-input"
                                multiple
                                value={chosenAuthor}
                                onChange={handleChangeAuthors}
                                input={<OutlinedInput label="Autor (autorzy)" />}
                            >
                                {authors.map((author) => (
                                    <MenuItem
                                        key={author.getId()}
                                        value={`${author.getFirstName()} ${author.getLastName()}`}
                                        style={getStyles(`${author.getFirstName()} ${author.getLastName()}`, chosenAuthor, theme)}
                                    >
                                        {`${author.getFirstName()} ${author.getLastName()}`}
                                    </MenuItem>
                                ))}
                            </Select>
                            <Button type="button" onClick={handleAddAuthorBtn}>Dodaj autora do listy</Button>
                        </FormControl>
                        {addNewAuthor && <AddAuthor setAddNewAuthor={setAddNewAuthor} />}
                    </Grid>


                </form>
            </Grid>
        </Grid>
    )
}

export default AddBook;
