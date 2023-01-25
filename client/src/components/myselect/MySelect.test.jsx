import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import MySelect from './MySelect';


const onChange = jest.fn();
const options = [
    {value: 'Temperature', name: 'Temperature forecast'},
    {value: 'Pressure', name: 'Pressure forecast'},
    {value: 'Humidity', name: 'Humidity forecast'}
]
const value = undefined
console.error = jest.fn()

describe('MySelect component', () => {
    test('styles works', () => {
        render(<MySelect 
            options={options} 
            value={value}
            onChange={onChange}
        />);
        expect(screen.getByRole('combobox')).toHaveClass('mySelect');
    });
    test('onChange works', () => {
        render(<MySelect 
            options={options} 
            value={value}
            onChange={onChange}
        />);  
        userEvent.type(screen.getByRole('combobox'), 'Pressure forecast');
        expect(onChange).toHaveBeenCalledTimes(0);
    })
});