import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

test('check if Header component is renderd', () => {

    render(
        <Provider store={store}>
            <App />
        </Provider>

    )
    const applicationTitle = screen.getByText("Sąsiedzka biblioteka");

    expect(applicationTitle).toBeInTheDocument();
});
