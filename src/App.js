import React, { Component } from "react";
import ContactForm from "./components/ContactsForm";
import { v4 as uuid } from "uuid";
import Filter from "./components/Filter";
import ContactList from "./components/ContactsList";

// import PropTypes from 'prop-types';

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  componentDidMount() {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    storedContacts > 0 && this.setState({ contacts: storedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    prevState.contacts !== this.state.contacts &&
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  addContact = (name, number) => {
    const contact = {
      id: uuid(),
      name: name,
      number: number,
    };

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  removeContact = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
      };
    });
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        {contacts.length > 1 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}
        <ContactList
          onRemoveContact={this.removeContact}
          contacts={this.getFilteredContacts()}
        />
      </>
    );
  }
}
