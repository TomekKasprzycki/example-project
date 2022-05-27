import User from "../model/User";
import { mapUser } from './../Converters/UserConverter';

const getUser = async (loginUser: User): Promise<User> => {

    const url1 = 'http://localhost:3001/users?login=';
    const response = await fetch(url1 + loginUser.getLogin(), {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })

    let user: any[];
    if (response.status === 200) {
        user = await response.json();
    } else {
        user = new Array<User>();
        user.push(new User(0,"","","",""));
    }

    return mapUser(user[0]);
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
