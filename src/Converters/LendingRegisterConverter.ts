import LendingRegister from "../model/LendingRegister";
import { mapUser } from './UserConverter';
import { mapBook } from "./BookConverter";

const mapLendingRegister = (object: any): LendingRegister => {

    return (new LendingRegister(
        object.id,
        mapUser(object.user),
        mapBook(object.book),
        object.dateOfLend,
        object.dateOfReturn
    ));
}

const mapLendingRegisterList = (array: any[]): LendingRegister[] => {
    return array.map(object => mapLendingRegister(object));
}

export { mapLendingRegister, mapLendingRegisterList };
