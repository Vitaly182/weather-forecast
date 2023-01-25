import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Filter from './Filter';


const filter = {chart: "Temperature"}
console.error = jest.fn()

describe('Filter component', () => {
    test('search filter', () => {
        render(<Filter 
            filter={filter} 
        />);
        expect(screen.getByRole('combobox')).toHaveClass('mySelect');
        expect(screen.getByText(/Temperature forecast/)).toBeInTheDocument();
        expect(screen.getByText(/Pressure forecast/)).toBeInTheDocument();
        expect(screen.getByText(/Pressure forecast/)).toBeInTheDocument();
    });
});

