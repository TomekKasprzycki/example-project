import React, { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { loginUser, showActiveUser } from './LoginSlice';
import User from "../../model/User";
import getUser from "../../services/LoginService";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


const Login = (): JSX.Element => {

    let history = useHistory();

    useEffect((): void => { document.title = "Strona logowania" }, []);

    const user: User = useAppSelector(showActiveUser);
    const dispach = useDispatch();

    const handleOnInput = (event: React.FormEvent<HTMLInputElement>): void => {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;
        if (name === "login") {
            user.setLogin(value);
        } else {
            user.setPassword(value);
        }
    }

    console.log(user);

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        getUser(user).then(res => dispach(loginUser(res))).catch(() => history.push('/UnsuccesfulLogin'))
    }

    return (
        user ?
            <div className="login-container">
                <header className="login-header">Podaj swój login i hasło</header>
                <form className="login-form" onSubmit={handleOnSubmit}>
                    <label htmlFor="input-login" >Login</label>
                    <input id="input-login" type="text" name="email" placeholder="Wprowadź swój login" onChange={handleOnInput} />
                    <label htmlFor="input-password" >Login</label>
                    <input id="input-password" type="password" name="password" placeholder="Wprowadź swoje hasło" onChange={handleOnInput} />
                    <button className="btn login-btn" type="button">Zaloguj</button>
                </form>
            </div> :
            <div>Jesteś już zalgowany!</div>
    )
}

export default Login;
