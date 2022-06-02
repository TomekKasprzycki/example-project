import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import User from "../../model/User";
import Category from "../../model/Category";
import Author from "../../model/Author";
import Book from "./../../model/Book";
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
import { mapAuthorFromName } from "../../Converters/AuthorConverter";
import { mapCategoryById } from "../../Converters/CategoryConverter";
import { useAppSelector } from "../../app/hooks";
import { showActiveUser } from "../Login/LoginSlice";
import { addMyBook } from "../../services/BookService";
import { showCurrentToken } from "../Login/TokenSlice";
import { useNavigate } from "react-router-dom";



const AddBook: React.FC = () => {

    const user: User = useAppSelector(showActiveUser).activeUser;
    const [categories, setCategories] = useState(new Array<Category>());
    const [addNewAuthor, setAddNewAuthor] = useState(false);
    const [authorHasBeenAdded, setAuthorHasBeenAdded] = useState(false);
    const [authors, setAuthors] = useState(new Array<Author>());
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [chosenAuthor, setChosenAuthor] = useState(new Array<string>())
    const [chosenCategory, setChosenCategory] = useState('');
    const theme = useTheme();
    const token = useAppSelector(showCurrentToken).currentToken;
    const [isBookSaved, setIsBookSaved] = useState(false);
    const navigate = useNavigate();


    console.log(authorHasBeenAdded)
    useEffect(() => {
        getAllCategories().then(categories => setCategories(categories));
        getAllAuthors().then(authors => setAuthors(authors));
    }, [authorHasBeenAdded])

    const formHandler = (data: any): void => {

        const newBook = new Book(0,
            data.title,
            mapAuthorFromName(data.authors, authors),
            mapCategoryById(data.category, categories),
            0,
            user,
            false
        )

        addMyBook(newBook, token).then(res => setIsBookSaved(res))

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

    const handleAddAuthorBtn = (): void => {
        setAddNewAuthor(true);
    }


    return (
        !isBookSaved ?
            <Grid container spacing={6} >
                <Grid item xs={12} textAlign="center">
                    <Typography variant="h4">Poniżej możesz wprowadzić dane swojej książki</Typography>
                </Grid>
                <Grid item xs={12}>
                    <form onSubmit={handleSubmit(formHandler)} justifi-content="center" >
                        <Grid item xs={12} textAlign="center" sx={{ marginBottom: 2 }}>
                            <TextField {...register("title", { required: "requierd" })}
                                id="input-title"
                                type="text"
                                variant="outlined"
                                label="Podaj tytuł książki"
                                sx={{ width: 300 }}
                                inputProps={{ style: { textAlign: "center" } }}
                                helperText={errors.username?.type === 'required' && "Username is requierd"}
                            />
                        </Grid>
                        <Grid item xs={12} textAlign="center" sx={{ marginBottom: 2 }}>
                            <FormControl >
                                <InputLabel id="input-category-select">Kategoria</InputLabel>
                                <Select {...register("category", { required: "requierd" })}
                                    labelId="input-category-select"
                                    id="input-category-select"
                                    value={chosenCategory}
                                    input={<OutlinedInput label="Kategoria" />}
                                    sx={{ width: 300 }}
                                    onChange={handleChangeCategory}
                                >
                                    {categories.map((category) => { return <MenuItem key={category.getId()} value={category.getId()}>{category.getName()}</MenuItem> })}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} textAlign="center" sx={{ marginBottom: 2 }}>
                            <FormControl >
                                <InputLabel id="multiple-name-label">Autor (autorzy)</InputLabel>
                                <Select {...register("authors", { required: "requierd" })}
                                    labelId="multiple-name-label"
                                    id="multiple-name-input"
                                    multiple
                                    value={chosenAuthor}
                                    sx={{ width: 300 }}
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
                        </Grid>
                        <Grid item xs={12} textAlign="center">
                            <Button type="submit" variant="contained" >Zapisz książkę</Button>
                        </Grid>

                    </form>
                    {addNewAuthor && <AddAuthor setAddNewAuthor={setAddNewAuthor} setAuthorHasBeenAdded={setAuthorHasBeenAdded} />}
                </Grid>
            </Grid> :
            <Grid container spacing={6}>
                <Grid item xs={12} textAlign="center">
                    <Typography variant="h4">Super, Twoja książka jest już w naszej bibliotece!</Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <Typography variant="h6" sx={{ paddingLeft: 10, paddingRight: 10 }}>Jest ona już dostepna do wypożyczenia. Powiadom swoich sąsiadów o nowej książce, bo na chwilę obecną takiej funkcjonalności nasza strona nie ma! Ale pracujemy nad tym :)</Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <Typography variant="h6">Tymczasem wybierz, co chcesz zrobić:</Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <Button type="button" onClick={() => {navigate("/")}} sx={{ width: 300 }}>Wróć do strony głównej</Button>
                    <Button type="button" onClick={() => {setIsBookSaved(false)}} sx={{ width: 300 }}>Dodaj kolejną książkę</Button>
                </Grid>
            </Grid>
    )
}

export default AddBook;
