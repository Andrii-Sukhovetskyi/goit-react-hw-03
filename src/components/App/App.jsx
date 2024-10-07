import "./App.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useEffect, useState } from "react";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const [search, setSearch] = useState("");

  const handleSearch = (searchQuery) => {
    setSearch(searchQuery);
  };

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={addContact} />
      <SearchBox search={search} handleSearch={handleSearch} />
      <ContactList
        contacts={visibleContacts}
        handleDeleteContact={deleteContact}
      />
    </div>
  );
}

export default App;