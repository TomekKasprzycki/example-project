import { render, screen } from "@testing-library/react";
import AddBook from "./AddBook";
import userEvent from '@testing-library/user-event';
import { Provider } from "react-redux";
import { store } from './../../app/store';
import { BrowserRouter as Router } from "react-router-dom";


describe('AddBook component', () => {

    test('check if title is added', async() => {

        render(
        <Provider store={store}>
            <Router>

                <AddBook />
            
            </Router>
        </Provider>
        )
        const titleInput: HTMLInputElement = screen.getByRole("textbox");
        
        await userEvent.type(titleInput, "Book title")
                
        expect(titleInput).toHaveValue("Book title");
    })

    test('check if add author button works', async()=>{

        render(
            <Provider store={store}>
                <Router>
    
                    <AddBook />
                
                </Router>
            </Provider>
            )

        const addAuthorBtn = screen.getByText("Dodaj autora do listy");
        await userEvent.click(addAuthorBtn)
        const btnCloseForm = screen.getByText("Zamknij formularz")
        
        

        expect(btnCloseForm).toBeInTheDocument();
    })
})

