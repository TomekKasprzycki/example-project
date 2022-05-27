import React, { useEffect, useState, useRef } from "react";
// import { useAppSelector } from "../../app/hooks";
// import { loginUser, showActiveUser } from './LoginSlice';
import User from "../../model/User";
import { getUser } from "../../services/LoginService";
// import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import {
    TextField,
    Grid,
    Button,
    Typography
} from '@mui/material';

const Login: React.FC<{ setUser: any, user: User }> = (props): JSX.Element => {

    useEffect((): void => { document.title = "Strona logowania" }, []);
    const [passwordInputState, setPasswordInputState] = useState(false);
    const [loginInputState, setLoginInputState] = useState(false)
    const inputRef = useRef<null | HTMLInputElement>(null);
    const user: User = props.user;
    // const user: User = useAppSelector(showActiveUser);
    // const dispach = useDispatch();
    const [loginSuccesful, setLoginSuccesfull] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const formHandler = (data: any): void => {

        user.setLogin(data.login);
        user.setPassword(data.password);

        getUser(user)
            .then(res => {
                if(res.getId() !== 0){
                    setLoginSuccesfull(true);
                    props.setUser(res);
                } else {
                    setLoginSuccesfull(false);
                }
            })
            .catch((err) => {
                console.log(err);
                setLoginSuccesfull(false);
            })

        if (loginSuccesful) navigate("/");

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
                            label="Insert user name"
                            inputProps={{ style: { textAlign: "center" } }}
                            helperText={errors.username?.type === 'required' && "Username is requierd"}
                        />
                    </Grid>
                    <Grid item xs={12} textAlign="center" sx={{ marginBottom: 2 }}>
                        <TextField {...register("password", { required: "requierd" })}
                            id="input-password"
                            type="text"
                            inputRef={inputRef}
                            onChange={inputPasswordChangeHandler}
                            variant="outlined"
                            label="Insert password"
                            inputProps={{ style: { textAlign: "center" } }}
                            helperText={errors.username?.type === 'required' && "Password is requierd"}
                        />
                    </Grid>
                    <Grid item xs={12} textAlign="center">
                        <Button type="submit" disabled={!loginInputState && !passwordInputState} variant="contained" >Zaloguj</Button>
                    </Grid>
                </form>
                </Grid>
            </Grid> :
            <div>Jesteś już zalgowany!</div>
    )
}

export default Login;
