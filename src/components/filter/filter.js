import PropTypes from 'prop-types';
import { Label, FilterInput } from './Filter.Styled';

const Filter = ({ onFilterContacts, filter }) => (
  <Label>
    Find contacts by name
    <FilterInput
      type="text"
      value={filter}
      onChange={onFilterContacts}
    ></FilterInput>
  </Label>
);

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterContacts: PropTypes.func.isRequired,
};
