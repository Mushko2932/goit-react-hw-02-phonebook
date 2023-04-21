import PropTypes from 'prop-types';

export const SearchForm = ({value, onChange}) => {
    return (
      <label>
        Find contacts by name
        <input type="text" name="name" value={value} onChange={onChange}/>
      </label>
    );
}

SearchForm.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}