import User from "../model/User";
import axios from "axios";

export const loginUser = async (loginUser: User): Promise<string> => {

    const response = await axios.post('http://localhost:8080/api/authentication/anonymous/login', loginUser, {
        headers: {
            "Content-Type": "application/json",
            "TYPE":"Login"
        },
    })

    const token = response.data
    
    return token;
}

export const logoutUser = async (token: string): Promise<boolean> => {

    const url = 'http://localhost:8080/api/authentication/logout';
    const response = await axios.get(url, {
        headers: {
            "content-type": "application/json",
            "TYPE":"Logout",
            "Authorization": token
        }
    })

    return response.status === 200;
}

export const registerUser = async(newUser: User ): Promise<boolean> => {

    const url1 = 'http://localhost:8080/api/authentication/anonymous/registration';
    const response = await axios.post(url1, newUser, {
        headers: {
            "Content-Type": "application/json",
            "TYPE":"Registration"
        }
    })
    
    return response.status === 200;
}

