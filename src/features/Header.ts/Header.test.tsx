import { render, screen } from '@testing-library/react';
import Header from './Header';
import { Provider } from "react-redux";
import { store } from './../../app/store';
import { BrowserRouter as Router } from "react-router-dom";

describe('Header component', () => {
    test('is button with the name of applicaton is renderd', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Header />
                </Router>
            </Provider>
        );

        const btn: HTMLButtonElement = screen.getByText("Sąsiedzka biblioteka");

        expect(btn).toBeInTheDocument();
    })
})