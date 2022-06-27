import LendingRegister from "../model/LendingRegister";
import { mapUser } from './UserConverter';
import { mapBook } from "./BookConverter";

const mapLendingRegister = (object: any): LendingRegister => {

    return (new LendingRegister(
        object.id,
        object.userDto,
        mapBook(object.bookDto),
        object.dateOfLend,
        object.dateOfReturn
    ));
}

const mapLendingRegisterList = (array: any[]): LendingRegister[] => {
    return array.map(object => mapLendingRegister(object));
}

export { mapLendingRegister, mapLendingRegisterList };
