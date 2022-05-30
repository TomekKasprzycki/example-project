import User from "./../model/User";

const mapUser = (object: any): User => {

    return new User(object.id,
                    object.login,
                    object.name,
                    object.password,
                    object.password2,
                    object.role,
                    object.active)
}

const mapUsers = (array: any[]): User[] => {

    return array.map(object => mapUser(object));
}

export { mapUser, mapUsers }