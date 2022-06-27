import {
    Button, 
    Grid, 
    TextField, 
    Typography, 
    InputAdornment, 
    IconButton
} from '@mui/material';
import {
    Visibility,
    VisibilityOff
} from '@mui/icons-material';
import React, { useEffect, useRef, useState } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { loginUserToState, showActiveUser } from './LoginSlice';
import { sampleUser, User } from "../../model/User";
import { loginUser } from "../../services/UserService";
import { addToken } from './TokenSlice';

const Login: React.FC = (): JSX.Element => {

    useEffect((): void => { document.title = "Strona logowania" }, []);
    const [passwordInputState, setPasswordInputState] = useState(false);
    const [loginInputState, setLoginInputState] = useState(false)
    const inputRef = useRef<null | HTMLInputElement>(null);
    const user: User = useAppSelector(showActiveUser).activeUser;
    const dispach = useAppDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);


    const formHandler = (data: any): void => {

        user.login = data.login;
        user.password = data.password;

        loginUser(user)
            .then(res => {
                if (res) {
                    let token = `Bearer ${res}`
                    dispach(addToken(token))
                    readToken(res);
                    navigate("/");
                }
            })
            .catch((err) => {
                console.log(err);
            })

    }

    const readToken = (token: string): void => {
        const tokenData: any = JSON.parse(atob(token.split('.')[1]));
        const loggedUser: User = { ...sampleUser };
        loggedUser.id = tokenData.id;
        loggedUser.login = tokenData.email;
        loggedUser.name = tokenData.name;
        loggedUser.role = tokenData.role;
        dispach(loginUserToState(loggedUser))
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

    const handleClickShowPassword = (): void => {
        setShowPassword(!showPassword);
    }


    return (
        user.id === 0 ?
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
                                inputProps={{ style: { textAlign: "center", width: 250 } }}
                                helperText={errors.username?.type === 'required' && "Username is requierd"}
                            />
                        </Grid>
                        <Grid item xs={12} textAlign="center" sx={{ marginBottom: 2 }}>
                            <TextField {...register("password", { required: "requierd" })}
                                id="input-password"
                                type={showPassword ? "text" : "password"}
                                inputRef={inputRef}
                                onChange={inputPasswordChangeHandler}
                                variant="outlined"
                                label="Wpisz hasło"
                                inputProps={{ style: { textAlign: "center", width: 214 } }}
                                helperText={errors.username?.type === 'required' && "Password is requierd"}
                                InputProps={{
                                    endAdornment:   < InputAdornment position="end" >
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleClickShowPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                }}
                            />
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <Button type="submit" disabled={!loginInputState && !passwordInputState} variant="contained" >Zaloguj</Button>
                </Grid>
            </form>
                </Grid >

                <Grid item xs={12} textAlign="center">
                    <Typography variant="h5">Nie masz jesz konta? Załóż je szybko!</Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <Typography variant="body1">Pamiętaj, książki czekają na wypożyczenie! Twoje też!</Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <Button type="button" variant="outlined" onClick={() => { navigate("/registration") }}>Załóż konto</Button>
                </Grid>
            </Grid > :
<div>Jesteś już zalgowany!</div>
    )
}

export default Login;
