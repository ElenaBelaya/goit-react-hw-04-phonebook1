import { useState, useEffect } from 'react';
import ContactForm from './contactForm';
import ContactList from './contactList';
import Section from './section';
import { Container } from './section/Section.styled';
import Filter from './filter';

const KEY = 'contacts';

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem(KEY)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterContacts = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    if (contacts.length !== []) {
      const notmalisedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(notmalisedFilter)
      );
    }
  };

  const addContact = (values, id) => {
    const newContact = { id, ...values };
    const found = contacts.some(function (contact) {
      return contact.name.toLowerCase() === values.name.toLowerCase();
    });

    if (!found) {
      setContacts(state => [newContact, ...state]);
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
