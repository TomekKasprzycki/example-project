import User from "../model/User";
import { mapUser } from './../Converters/UserConverter';

const getUser = async (loginUser: User): Promise<string> => {

    const url1 = 'http://localhost:8080/api/authentication';
    const response = await fetch(url1, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "TYPE":"Login"
        },
        body: JSON.stringify(loginUser)
    })
    const headers = response.headers;
   

    console.log(response)

    return response.json();
}

const logoutUser = async (user: User): Promise<void> => {

    const url = "/logout";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    })

}

export { getUser, logoutUser };
