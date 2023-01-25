import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import SummaryCard from './SummaryCard';


const day = {
    dt_txt: "2023-01-27 12:00:00", 
    main: {temp: -1.48, feels_like: -4.96, temp_min: -1.48, temp_max: -1.48, pressure: 1022}, 
    weather: [{id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d'}]
}


describe('SummaryCard component', () => {
    test('SummaryCard renders', () => {
        render(<SummaryCard day={day} />);    
        expect(screen.getByRole('img')).toBeInTheDocument();
    });
});