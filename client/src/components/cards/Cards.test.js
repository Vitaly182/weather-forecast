import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Cards from './Cards';


const weatherData = {
    cod: '200', 
    message: 0, 
    cnt: 40, 
    city: {id: 521901, name: 'Moscow', country: 'RU', population: 0},    
    list: [
        {
            dt_txt: "2023-01-24 06:00:00",
            main: {temp: -6.14, feels_like: -8.85, temp_min: -10.28, temp_max: -6.14, pressure: 1040},
            weather: [{id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d'}]
        },
        {
            dt_txt: "2023-01-24 06:00:00",
            main: {temp: -6.14, feels_like: -8.85, temp_min: -10.28, temp_max: -6.14, pressure: 1040},
            weather: [{id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d'}]
        }
    ]}

const re = '/12:00:00/'

describe('Cards component', () => {
    test('Cards renders', () => {
        render(<Cards 
            weatherData={weatherData}
            re={re}
        />);    
        expect(screen.getByRole('list')).toBeInTheDocument();
    });
    test('Cards snapshot', () => {
        const view = render(<Cards 
            weatherData={weatherData}
            re={re}
        />);    
        expect(view).toMatchSnapshot();
    });
});