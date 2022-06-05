import User from "../model/User";
import { loginUserToState } from "../features/Login/LoginSlice";


export const readToken = (token: string, dispach: any): void => {
        const tokenData: any = JSON.parse(atob(token.split('.')[1]));
        const loggedUser = new User(0, "", "", "", "", "", true)
        loggedUser.setId(tokenData.id);
        loggedUser.setLogin(tokenData.email);
        loggedUser.setName(tokenData.name);
        loggedUser.setRole(tokenData.role);
        dispach(loginUserToState(loggedUser))
    }