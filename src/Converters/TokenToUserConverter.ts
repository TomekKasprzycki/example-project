import { sampleUser, User } from "../model/User";
import { loginUserToState } from "../features/Login/LoginSlice";


export const readToken = (token: string, dispach: any): void => {
        const tokenData: any = JSON.parse(atob(token.split('.')[1]));
        const loggedUser = sampleUser;
        loggedUser.id = tokenData.id;
        loggedUser.login = tokenData.email;
        loggedUser.name = tokenData.name;
        loggedUser.role = tokenData.role;
        dispach(loginUserToState(loggedUser))
    }