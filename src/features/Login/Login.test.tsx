import { configure, render, screen } from '@testing-library/react';
import Login from './Login';
import { Provider } from "react-redux";
import { store } from '../../app/store';
import { BrowserRouter as Router } from "react-router-dom";


describe('Login component', ()=>{
    
    configure({testIdAttribute: 'id'})
    test('check readToken function', ()=>{

        render(
            <Provider store={store}>
                <Router>
                    <Login />
                </Router>
            </Provider>
        );

        const token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0b21hc3oua2FzcHJ6eWNraUBnbWFpbC5jb20iLCJpZCI6MiwibmFtZSI6IlRvbWVrIEthc3Byenlja2kiLCJlbWFpbCI6InRvbWFzei5rYXNwcnp5Y2tpQGdtYWlsLmNvbSIsInJvbGUiOiJST0xFX0FETUlOIiwiaWF0IjoxNjU0MjU4MzA1LCJleHAiOjE2NTQyNTk1MDV9.v5UeaMOkhfJ3QN6MGMKlF_kZ33QjLq7FE_UpISofCto"

        //jak przetestować funkcję w komponencie?

        const passwordInput: HTMLInputElement = screen.getByTestId("input-password")
        const typeOfInput: string = passwordInput.type

        //expect(passwordInput).toHaveProperty('type');
        expect(typeOfInput).toEqual('password');

    })






})

