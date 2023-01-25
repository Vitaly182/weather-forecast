import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import HistoryItem from './HistoryItem';


const historyData = {id: 1, created_at: '2023-01-23 15:31:11', screen: 'http://127.0.0.1:8000/screen/2023/01/23/1.jpeg'}


describe('HistoryItem component', () => {
    test('HistoryItem renders', () => {
        render(<HistoryItem historyData={historyData} />);    
        expect(screen.getByRole('link', { name: '2023-01-23 15:31:11' })).toBeInTheDocument();
    });
    test('HistoryItem snapshot', () => {
        const view = render(<HistoryItem historyData={historyData} />);    
        expect(view).toMatchSnapshot();
    });
});