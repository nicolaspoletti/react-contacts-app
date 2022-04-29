import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const contactsArray = [
    {id: uuidv4(), name:"John Doe", phone: "(+61)0444 444 444"},
    {id: uuidv4(), name:"Sarah Connor", phone: "(+61)0566 456 789"},
    {id: uuidv4(), name:"Harry Potter", phone: "(+61)0555 555 555"},
    {id: uuidv4(), name:"Albus Dumbledore", phone: "(+61)0666 666 666"},
    {id: uuidv4(), name:"John Wick", phone: "(+61)0777 777 777"},
    {id: uuidv4(), name:"Benjamin Buford \"Bubba\" Blue", phone: "(+61)0888 888 888"}
  ];

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contact } ]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactsArray));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;