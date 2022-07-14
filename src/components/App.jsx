import { Component } from "react";
import ContactForm from './contactForm/ContactForm';
import ContactList from "./contactList/ContactList";

const KEY = 'contacts';


export class App extends Component {
state = {
  contacts: [],
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
  const newContact= {id, ...values}
  this.setState(state => ({
    contacts: [newContact, ...state.contacts]
  }) 
  )}

  render() {
    const { contacts} = this.state;
    return (
      <>
     <ContactForm 
     onSubmit={this.addContact}/>  
     <ContactList contacts={contacts} />
      </>
    );
  };
  }
 
