import React from "react";
import { ContactsForm } from "components/ContactsForm/ContactsForm";
import { ContactList } from "components/ContactList/ContactList";
import contacts from "components/contacts.json";
import { SearchForm } from "components/SearchForm/SearchForm";
console.log('contacts :>> ', contacts);
export class App extends React.Component {
  state = {
    contacts,
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeSearchForm = e => {
    this.setState({ filter: e.currentTarget.value.toLowerCase() });
  };

  render() {
    const { filter } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          marginLeft: '20px',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactsForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <SearchForm onChange={this.changeSearchForm} value={filter} />
        <ContactList contacts={contacts} onDelete={this.deleteContact} />
      </div>
    );
  }
};
