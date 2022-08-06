import PropTypes from 'prop-types';
import { DeleteButton, Li } from './ContactList.Styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <Li key={id}>
        {name}: {number}
        <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </DeleteButton>
      </Li>
    ))}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
