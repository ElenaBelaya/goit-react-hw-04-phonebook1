import PropTypes from 'prop-types';

const Filter = ({ onFilterContacts, filter }) => (

    <label>
        Find contacts by name
        <input type='text' 
        value={filter} 
        onChange={onFilterContacts}></input>
    </label>


)

export default Filter;

Filter.propTypes = {
    filter: PropTypes.arrayOf(PropTypes.string),
    onFilterContacts: PropTypes.func,
  
  } 