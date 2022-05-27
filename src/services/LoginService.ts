import User from "../model/User"

const getUser = async (loginUser: User): Promise<User> => {
    
    const url1 = 'http://localhost:3001/users?login=';
    const response = await fetch(url1 + loginUser.getLogin(), {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })

    let user: User = new User(0,"","","","");
    if(response.ok) {
    user = await response.json();
    } 

    return user;
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

export {getUser, logoutUser};
