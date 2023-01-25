import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Common from './Common';



const weatherData = ''  
const noData = ''
const weatherIcon = 'https://openweathermap.org/img/wn/03n@4x.png'
const city = 'Moscow'


describe('Common component', () => {
    test('Common renders', () => {
        render(<Common 
            weatherData={weatherData}
            noData={noData}
            weatherIcon={weatherIcon}
            city={city}
            />);      
        expect(screen.getByText('Weather')).toBeInTheDocument();
        expect(screen.getByText('Charts')).toBeInTheDocument();
        expect(screen.getByText('Days')).toBeInTheDocument();
        expect(screen.getByText('Download screen')).toBeInTheDocument();
        expect(screen.getByText('Save screen')).toBeInTheDocument();
        expect(screen.getByText('History screens')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Weather' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Charts' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Days' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Download screen' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'History screens' })).toBeInTheDocument();
    });
    test('upload file', async () => {
        render(<Common 
            weatherData={weatherData}
            noData={noData}
            weatherIcon={weatherIcon}
            city={city}
            />);      
        const file = new File(['hello'], 'hello.png', {type: 'image/png'})
        const input = screen.getByLabelText(/Save screen/i)        
        await userEvent.upload(input, file)        
        expect(input.files[0]).toBe(file)
        expect(input.files.item(0)).toBe(file)
        expect(input.files).toHaveLength(1)
    });
});