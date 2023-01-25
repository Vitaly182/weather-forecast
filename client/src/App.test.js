import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';


const submitButton = screen.queryByText('submit')

describe('App component', () => {
    test('renders elements', () => {
        render(<App />);
        const h1 = screen.getByText(/Weather Forecast/);
        expect(h1).toBeInTheDocument();
        const btn = screen.getByRole('button', { name: '' })
        expect(btn).toBeInTheDocument();
        const input = screen.getByPlaceholderText(/Enter location/i)
        expect(input).toBeInTheDocument();
    });
    test('typing in Searchbox works', () => {
        render(<App />);
        expect(submitButton).toBeNull()
        userEvent.type(screen.getByRole('textbox'), 'Moscow')
        expect(screen.getByDisplayValue(/Moscow/)).toBeInTheDocument();
    })
});

