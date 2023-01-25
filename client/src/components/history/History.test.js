import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import History from './History';


const historyData = [
    {id: 1, created_at: '2023-01-23 15:31:11', screen: 'http://127.0.0.1:8000/screen/2023/01/23/1.jpeg'}, 
    {id: 2, created_at: '2023-01-23 10:13:09', screen: 'http://127.0.0.1:8000/screen/2023/01/23/2.png'}, 
    {id: 3, created_at: '2023-01-23 10:12:41', screen: 'http://127.0.0.1:8000/screen/2023/01/23/3.jpg'}
]  

describe('History component', () => {
    test('History renders', () => {
        render(<History historyData={historyData} />);    
        expect(screen.getByRole('link', { name: '2023-01-23 15:31:11' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: '2023-01-23 10:13:09' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: '2023-01-23 10:12:41' })).toBeInTheDocument();
        expect(screen.getByText('HISTORY')).toBeInTheDocument();
        expect(screen.getByText('DATE OF CREATION')).toBeInTheDocument();
    });
});