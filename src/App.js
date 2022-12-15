import React, { Component } from "react";
import ContactForm from "./components/ContactsForm";
import { v4 as uuid } from "uuid";
import Filter from "./components/Filter";
import ContactList from "./components/ContactsList";
import GlobalStyle from "./GlobalStyles";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Police", number: "102" },
      { id: "id-2", name: "Emergency", number: "103" },
      { id: "id-3", name: "Fire Service", number: "101" },
      { id: "id-4", name: "Emergency gas service", number: "104" },
    ],
    filter: "",
  };
  componentDidMount() {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    storedContacts &&
      storedContacts.length > 0 &&
      this.setState({ contacts: storedContacts });
  }

  componentDidUpdate(prevState) {
    prevState.contacts !== this.state.contacts &&
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  addContact = (name, number) => {
    const { contacts } = this.state;

    const contact = {
      id: uuid(),
      name: name,
      number: number,
    };

    if (contacts && contacts.find((contact) => name === contact.name)) {
      alert(`${contact.name} already exist in contacts!`);
    } else {
      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, contact],
        };
      });
    }
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
        <GlobalStyle />

        <ContactForm onSubmit={this.addContact} />

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
