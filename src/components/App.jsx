import { Component } from "react";
import ContactForm from './contactForm/ContactForm';
import ContactList from "./contactList/ContactList";
import Section from "./section/Section";

const KEY = 'contacts';


export class App extends Component {
state = {
  contacts: [],
  filter: ''
}
componentDidMount() {
  const lsContacts = localStorage.getItem(KEY);
    
if(lsContacts !== null) {
  this.setState({
    contacts: JSON.parse(lsContacts)})
}
}

componentDidUpdate(_, prevState) {
  if(prevState.contacts !== this.state.contacts) {
    localStorage.setItem(KEY, JSON.stringify(this.state.contacts))
  }
}

addContact = (values, id) => {
  const newContact = {id, ...values}
  const found = this.state.contacts.some(function(contact) {
    return contact.name === values.name
  })

  if(!found) {
    this.setState(state => ({
      contacts: [newContact, ...state.contacts]
    }))
  } else {
    alert(`${values.name} is already in contacts`)
  }
 
  }

  render() {
    const { contacts} = this.state;
    return (
      <>
      <Section
      title={'Phonebook'}>
     <ContactForm 
     onSubmit={this.addContact}/>
     </Section> 
     <Section
     title={'Contacts'} >
     <ContactList contacts={contacts} />
     </Section>
      </>
    );
  };
  }
 
