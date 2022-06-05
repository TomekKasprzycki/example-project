import { getAllCategories } from "./CategoryService";
import axios from "axios";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Category service', () => {


    test('check if categories comes from backend', async() => {

        const dbObj: any = { data: [{ id: 1, name: "test1" }, { id: 2, name: "Test2" }] }

        mockedAxios.get.mockResolvedValue(dbObj);
        const response = await getAllCategories();

        expect(response.length).toEqual(2);
    })

})