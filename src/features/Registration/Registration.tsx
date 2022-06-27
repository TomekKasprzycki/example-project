import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { sampleUser, User } from "../../model/User";
import {
    Button,
    TextField,
    Grid,
    Typography,
} from "@mui/material";
import { checkPassword, checkEmail } from "../../services/RegexService";
import { registerUser } from "../../services/UserService";
import { useNavigate } from "react-router-dom";


//sprawdzić dlaczego Regex do emaila tu nie działa! 

const Registration: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const inputRef = useRef<null | HTMLInputElement>(null);
    const [isLoginGiven, setIsLoginGiven] = useState(false);
    const [isNameGiven, setIsNameGiven] = useState(false);
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [isPasswordGiven, setIsPasswordGiven] = useState(false);
    const [newUser, setNewUser] = useState<User>(sampleUser);
    const [successfulRegistration, setSuccessfulRegistration] = useState(false);
    const [isProblem, setIsProblem] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let isPasswordOK = checkPassword(password);
        let isPassword2OK = checkPassword(password2);

        if (isPasswordOK && isPassword2OK) {
            setIsPasswordGiven(password === password2);
        } else {
            setIsLoginGiven(false);
        }

    }, [password, password2])

    useEffect(() => {

        if (newUser.login !== '') {
            registerUser(newUser).then(res => {
                if (res) {
                    setSuccessfulRegistration(true)
                } else {
                    setIsProblem(true);
                }
            }
            )
        }
        
}, [newUser])

const inputLoginChangeHandler = (event: any): void => {
    console.log(checkEmail(event.target.name))
    if (inputRef.current?.value !== "" && checkEmail(event.target.name)) {
        setIsLoginGiven(true)
    } else {
        setIsLoginGiven(false)
    }
}

const inputNameChangeHandler = (): void => {
    if (inputRef.current?.value !== "") {
        setIsNameGiven(true)
    } else {
        setIsNameGiven(false)
    }
}

const inputPasswordChangeHandler = (event: any): void => {
    setPassword(event.target.value);
}

const inputPassword2ChangeHandler = (event: any): void => {
    setPassword2(event.target.value)
}

const handleFormOnSubmit = (data: any): void => {
    const createdUser = sampleUser;
    createdUser.login = data.login;
    createdUser.name = data.name;
    createdUser.password = data.password;
    createdUser.password2 = data.password2;
    setNewUser(createdUser);
}

return (
    !successfulRegistration ?
        <Grid container spacing={6}>
            <Grid item xs={12} textAlign="center" sx={{ marginBottom: 2 }}>
                <Typography variant="h4">Załóż konto w naszej aplikacji!</Typography>
            </Grid>
            <Grid item xs={12} textAlign="center" sx={{ marginBottom: 2 }}>
                <Typography variant="h6">Wszystkie pola są wymagane.</Typography>
            </Grid>
            <Grid item xs={12}>
                <form onSubmit={handleSubmit(handleFormOnSubmit)}>
                    <Grid item xs={12} textAlign="center" sx={{ marginBottom: 2 }}>
                        <TextField {...register("login", { required: "required" })}
                            id="input-login"
                            type="text"
                            inputRef={inputRef}
                            onChange={inputLoginChangeHandler}
                            variant="outlined"
                            label="Wpisz swój adres email"
                            inputProps={{ style: { textAlign: "center" } }}
                            helperText={errors.username?.type === 'required' && "Username is requierd"}
                        />
                    </Grid>
                    <Grid item xs={12} textAlign="center" sx={{ marginBottom: 2 }}>
                        <TextField {...register("name", { required: "required" })}
                            id="input-name"
                            type="text"
                            inputRef={inputRef}
                            onChange={inputNameChangeHandler}
                            variant="outlined"
                            label="Wpisz swoje imię i nazwisko"
                            inputProps={{ style: { textAlign: "center" } }}
                            helperText={errors.username?.type === 'required' && "Username is requierd"}
                        />
                    </Grid>
                    <Grid item xs={12} textAlign="center" sx={{ marginBottom: 2 }}>
                        <TextField {...register("password", { required: "required" })}
                            id="input-password"
                            type="password"
                            inputRef={inputRef}
                            onChange={inputPasswordChangeHandler}
                            variant="outlined"
                            label="Wpisz hasło"
                            inputProps={{ style: { textAlign: "center" } }}
                            helperText={errors.username?.type === 'required' && "Username is requierd"}
                        />
                    </Grid>
                    <Grid item xs={12} textAlign="center" sx={{ marginBottom: 2 }}>
                        <TextField {...register("password2", { required: "required" })}
                            id="input-password2"
                            type="password"
                            inputRef={inputRef}
                            onChange={inputPassword2ChangeHandler}
                            variant="outlined"
                            label="Powtórz hasło"
                            inputProps={{ style: { textAlign: "center" } }}
                            helperText={errors.username?.type === 'required' && "Username is requierd"}
                        />
                    </Grid>
                    <Grid item xs={12} textAlign="center" sx={{ marginBottom: 2 }}>
                        <Button type="submit" disabled={!isLoginGiven && !isNameGiven && !isPasswordGiven} variant="contained" >Załóż konto</Button>
                    </Grid>
                </form>
            </Grid>
        </Grid>
        : isProblem ?
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Typography variant="h4">Coś poszło nie tak!</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1">Nie udało się stworzyć Twoje konta. Spróbuj ponownie później!</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1">Bardzo przepraszamy za zaistniałą sytuację. Jeśli problem się powtórzy skontaktuj się proszę z administartorem strony.</Typography>
                </Grid>
            </Grid>
            :
            <Grid container spacing={6} textAlign="center">
                <Grid item xs={12} >
                    <Typography variant="h4" >Doskonale! Twoje konto zostało założone.</Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <Typography variant="body1" >Na podany przez Ciebie adres /<span>{newUser.login}</span>/ został wysłany link aktywacyjny.</Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <Typography variant="body1" >Teraz wystaczy, że w niego klikniesz i kontro będzie aktywne, a na Ciebie czekać będzie masa książek do wypożyczenia i przeczytania!</Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <Button type="button" variant="outlined" onClick={() => setSuccessfulRegistration(false)} sx={{ width: 200, marginRight: 10 }}>Wróć do strony rejestracji</Button>
                    <Button type="button" variant="outlined" onClick={() => navigate("/")} sx={{ width: 200 }}>Przejdź do strony głównej</Button>
                </Grid>
            </Grid>

)

}

export default Registration;
