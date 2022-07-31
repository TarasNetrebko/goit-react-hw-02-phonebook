import React, { Component } from 'react';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { PhonebookList } from "./PhonebookList/PhonebookList"
import { ContentContainer } from "./App.styled"
import {Filter} from "./Filter/Filter"

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: "",
  };

  formSubmitHandler = data => {
    let isExisted = false;
    this.state.contacts.map(contact => {
      contact.name === data.name && (isExisted = true);
      return contact;
    })
    isExisted ? alert(`${data.name} is already is contacts`) : this.setState(({contacts}) => ({
      contacts: [data, ...contacts]
    }))
  }

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }
  deleteContact = (e) => {
    const contactsAfterDelete = this.state.contacts.filter(contact => contact.name !== e.currentTarget.id);
    this.setState(({contacts}) => ({
      contacts: [...contactsAfterDelete]
    }))
  }

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 24,
          color: '#010101',
        }}
      >
        <ContentContainer>
        <h1>Phonebook</h1>
          <PhonebookForm onSubmit={this.formSubmitHandler} />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <PhonebookList contacts={filteredContacts} onDelete={this.deleteContact} />
        </ContentContainer>
      </div>
    );
  }
}
