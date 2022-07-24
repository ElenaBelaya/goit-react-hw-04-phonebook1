import { Component } from 'react';
import ContactForm from './contactForm';
import ContactList from './contactList';
import Section from './section';
import { Container } from './section/Section.styled';
import Filter from './filter';
import PropTypes from 'prop-types';

const KEY = 'contacts';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const lsContacts = localStorage.getItem(KEY);

    if (lsContacts !== null) {
      setContacts(JSON.parse(lsContacts));
    }
  }, []);

  useEffect(() => {
    setContacts(localStorage.setItem(KEY, JSON.stringify(contacts)));
  }, [contacts]);

  const handleFilterContacts = event => {
    setFilter(event.currentTarget.value);
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const notmalisedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(notmalisedFilter)
    );
  };

  const addContact = (values, id) => {
    const newContact = { id, ...values };
    const found = this.state.contacts.some(function (contact) {
      return contact.name === values.name;
    });

    if (!found) {
      setContacts(state => [newContact, ...state.contacts]);
    } else {
      alert(`${values.name} is already in contacts`);
    }
  };

  const handleDeleteContact = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
  };

  return (
    <Container>
      <Section title={'Phonebook'}>
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section title={'Contacts'}>
        <Filter filter={filter} onFilterContacts={handleFilterContacts} />
        <ContactList
          contacts={getVisibleContacts()}
          onDeleteContact={handleDeleteContact}
        />
      </Section>
    </Container>
  );
}

App.propTypes = {
  handleFilterContacts: PropTypes.func,
  getVisibleContacts: PropTypes.func,
  addContact: PropTypes.func,
  handleDeleteContact: PropTypes.func,
  contacts: PropTypes.array,
  filter: PropTypes.string,
  id: PropTypes.string,
};
