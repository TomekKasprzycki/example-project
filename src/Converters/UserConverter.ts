import { User } from "./../model/User";

const mapUser = (object: any): User => {

    return object;
}

const mapUsers = (array: any[]): User[] => {

    return array.map(object => mapUser(object));
}

export { mapUser, mapUsers }