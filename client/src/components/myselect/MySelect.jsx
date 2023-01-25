import classes from './MySelect.module.css'

const MySelect = ({ options, value, onChange }) => {
    return (
        <select
            className={classes.mySelect}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;