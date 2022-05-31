import { tokenToString } from "typescript";
import User from "../model/User";

const loginUser = async (loginUser: User): Promise<string> => {

    const url1 = 'http://localhost:8080/api/authentication/anonymous/login';
    const response = await fetch(url1, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "TYPE":"Login"
        },
        body: JSON.stringify(loginUser)
    })
    const token: any = response.headers.get("Authorization");

    return token;
}

const logoutUser = async (user: User, token: string): Promise<void> => {

    const url = 'http://localhost:8080/api/authentication/logout';
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "TYPE":"Logout",
            "Authorization": token
        }
    })

}

const registerUser = async(newUser: User ): Promise<boolean> => {

    const url1 = 'http://localhost:8080/api/authentication/anonymous/registration';
    const response = await fetch(url1, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "TYPE":"Registration"
        },
        body: JSON.stringify(newUser)
    })

    console.log(response)
    
    return response.ok;
}

export { loginUser, logoutUser, registerUser };
