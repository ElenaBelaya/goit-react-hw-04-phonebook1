import { Component } from "react";
import ContactForm from './contactForm/ContactForm';
import ContactList from "./contactList/ContactList";
import Section  from "./section/Section";
import { Container } from "./section/Section.styled";
import Filter from "./filter/filter";

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
}}

componentDidUpdate(_, prevState) {
  if(prevState.contacts !== this.state.contacts) {
    localStorage.setItem(KEY, JSON.stringify(this.state.contacts))
  }
}

handleFilterContacts = (event) => {
   this.setState({
    filter: event.currentTarget.value,
  })
}

getVisibleContacts = () => {
  const { filter, contacts } = this.state;
  const notmalisedFilter = filter.toLowerCase();
 return contacts.filter(contact => 
    contact.name.toLowerCase().includes(notmalisedFilter)) 
  
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

handleDeleteContact = (id) => {
  this.setState(state => ({
    contacts: state.contacts.filter(contact => contact.id !== id)
  }))
} 
  render() {
    
    return (
      <Container>
      <Section
      title={'Phonebook'}>
     <ContactForm 
     onSubmit={this.addContact}/>
     </Section> 
     <Section
     title={'Contacts'} >
     <Filter
     filter={this.filter} 
     onFilterContacts={this.handleFilterContacts}
     />  
     <ContactList 
     contacts={this.getVisibleContacts()}
     onDeleteContact={this.handleDeleteContact} />
     </Section>
      </Container>
    );
  };
  }
 
