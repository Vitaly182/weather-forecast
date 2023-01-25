import MySelect from '../myselect/MySelect';

const Filter = ({filter, setFilter}) => {
    return (
        <div className='search_sort'>
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({chart: selectedSort})}
                options={[
                    { value: 'Temperature', name: 'Temperature forecast' },
                    { value: 'Pressure', name: 'Pressure forecast' },
                    { value: 'Humidity', name: 'Humidity forecast' }
                ]}
            />
        </div>
    );
};

export default Filter;