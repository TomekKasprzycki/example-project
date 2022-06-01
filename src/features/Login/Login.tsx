import {
    Button, Grid, TextField, Typography
} from '@mui/material';
import React, { useEffect, useRef, useState } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { loginUserToState, showActiveUser } from './LoginSlice';
import User from "../../model/User";
import { loginUser } from "../../services/UserService";
import { addToken, showCurrentToken } from './TokenSlice';

const Login: React.FC = (): JSX.Element => {

    useEffect((): void => { document.title = "Strona logowania" }, []);
    const [passwordInputState, setPasswordInputState] = useState(false);
    const [loginInputState, setLoginInputState] = useState(false)
    const inputRef = useRef<null | HTMLInputElement>(null);
    const user: User = useAppSelector(showActiveUser).activeUser;
    const token: string = useAppSelector(showCurrentToken).currentToken;
    const dispach = useAppDispatch();
    const [loginSuccesful, setLoginSuccesfull] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const formHandler = (data: any): void => {

        user.setLogin(data.login);
        user.setPassword(data.password);

        loginUser(user)
        .then(res => {
            if(res){
            dispach(addToken(res))
            readToken(res);
            setLoginSuccesfull(true)
            navigate("/");
        }
        })
        .catch((err) => {
            console.log(err);
            setLoginSuccesfull(false);
        })

    }

    const readToken = (token: string): void => {
        const tokenData: any = JSON.parse(atob(token.split('.')[1]));
        const loggedUser = new User(0, "", "","","","",true)
        loggedUser.setId(tokenData.id);
        loggedUser.setLogin(tokenData.email);
        loggedUser.setName(tokenData.name);
        loggedUser.setRole(tokenData.role);
        dispach(loginUserToState(loggedUser))
        //props.setUser(loggedUser);
    }

    const inputLoginChangeHandler = (): void => {
        if (inputRef.current?.value !== "") {
            setLoginInputState(true)
        } else {
            setLoginInputState(false)
        }
    }

    const inputPasswordChangeHandler = (): void => {
        if (inputRef.current?.value !== "") {
            setPasswordInputState(true)
        } else {
            setPasswordInputState(false)
        }
    }


    return (
        user.getId() === 0 ?
            <Grid container spacing={6}>
                <Grid item xs={12} textAlign="center">
                    <Typography variant="h4">Podaj swój login i hasło</Typography>
                </Grid>
                <Grid item xs={12}>
                    <form onSubmit={handleSubmit(formHandler)} justifi-content="center" >
                        <Grid item xs={12} textAlign="center" sx={{ marginBottom: 2 }}>
                            <TextField {...register("login", { required: "requierd" })}
                                id="input-login"
                                type="text"
                                inputRef={inputRef}
                                onChange={inputLoginChangeHandler}
                                variant="outlined"
                                label="Wpisz login"
                                inputProps={{ style: { textAlign: "center" } }}
                                helperText={errors.username?.type === 'required' && "Username is requierd"}
                            />
                        </Grid>
                        <Grid item xs={12} textAlign="center" sx={{ marginBottom: 2 }}>
                            <TextField {...register("password", { required: "requierd" })}
                                id="input-name"
                                type="password"
                                inputRef={inputRef}
                                onChange={inputPasswordChangeHandler}
                                variant="outlined"
                                label="Wpisz hasło"
                                inputProps={{ style: { textAlign: "center" } }}
                                helperText={errors.username?.type === 'required' && "Password is requierd"}
                            />
                        </Grid>
                        <Grid item xs={12} textAlign="center">
                            <Button type="submit" disabled={!loginInputState && !passwordInputState} variant="contained" >Zaloguj</Button>
                        </Grid>
                    </form>
                </Grid>

                <Grid item xs={12} textAlign="center">
                    <Typography variant="h5">Nie masz jesz konta? Załóż je szybko!</Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <Typography variant="body1">Pamiętaj, książki czekają na wypożyczenie! Twoje też!</Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <Button type="button" variant="outlined" onClick={() => { navigate("/registration") }}>Załóż konto</Button>
                </Grid>
            </Grid> :
            <div>Jesteś już zalgowany!</div>
    )
}

export default Login;
