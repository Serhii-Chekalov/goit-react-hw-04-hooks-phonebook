import { Component } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactsList/ContactList";
import Filter from "../Filter/Filter";
import { PrimaryTitle, SecondaryTitle } from "./App.styled";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const storageContacts = localStorage.getItem("contacts");
    const storageContactsParced = JSON.parse(storageContacts);
    if (storageContactsParced) {
      this.setState({ contacts: storageContactsParced });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contact !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleFilter = (text) => {
    this.setState({ filter: text });
  };

  visibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState({
          contacts: [newContact, ...contacts],
        });
  };

  deleteContact = (id) => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter((contact) => contact.id !== id),
    });
  };

  render() {
    const { addContact, handleFilter, visibleContacts, state, deleteContact } =
      this;
    return (
      <>
        <PrimaryTitle>Phonebook</PrimaryTitle>
        <ContactForm onSubmit={addContact} />

        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter onChange={handleFilter} value={state.filter} />
        <ContactList contacts={visibleContacts()} deleteId={deleteContact} />
      </>
    );
  }
}

export default App;
