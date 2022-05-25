import User from "../model/User"

const getUser = async (loginUser: User): Promise<User> => {

    const url1 = `http:localhost:3001/users?email=${loginUser.getLogin()}`;
    const response = await fetch(url1, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        }
    })

    const user: User = await response.json();

    return user;
}

export default getUser;
