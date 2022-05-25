import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { loginUser, showActiveUser } from './LoginSlice';
import User from "../../model/User";
import getUser from "../../services/LoginService";
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';

const Login = (): JSX.Element => {


    useEffect((): void => { document.title = "Strona logowania" }, []);

    const user: User = useAppSelector(showActiveUser);
    const dispach = useDispatch();
    const [loginSuccesful, setLoginSuccesfull] = useState(true);

   const { register, handleSubmit, formState: { errors }} = useForm<User>();



    console.log(user);

    const formHandler = (data: User): void => {
        getUser(data)
            .then(res => {
                setLoginSuccesfull(true);
                dispach(loginUser(res));
            })
            .catch((err) => {
                console.log(err);
                setLoginSuccesfull(false);
            })
    }

    return (
        user ?
            <div className="login-container">
                <header className="login-header">Podaj swój login i hasło</header>
                <form className="login-form" onSubmit={handleSubmit(formHandler)}>
                    <label htmlFor="input-login" >Login</label>
                    <input id="input-login" {...register("setLogin", { required: "requierd" })} type="text" placeholder="Wprowadź swój login"  />
                    <label htmlFor="input-password" >Login</label>
                    <input id="input-password" {...register("setPassword", { required: "requierd "}) } type="password" placeholder="Wprowadź swoje hasło"  />
                    <button className="btn login-btn" type="button">Zaloguj</button>
                    {!loginSuccesful && <p>Podano nieprawidłowy login lub hasło!</p>}
                </form>
            </div> :
            <div>Jesteś już zalgowany!</div>
    )
}

export default Login;
