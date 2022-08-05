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
//console.log(contacts);
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
