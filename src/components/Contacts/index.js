import React, { useEffect, useState } from "react";

import styles from "../../styles/contacts.module.css";
import { Link } from "react-router-dom";
const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const contactsFromStorage = localStorage.getItem("contacts");

    if (contactsFromStorage) {
      setContacts([...JSON.parse(contactsFromStorage)]);
    }
  }, []);
  return (
    <div>
      <Link to="/add">
        <button>Add +</button>
      </Link>
      <div className={styles.contacts_wrapper}>
        {contacts.length === 0 && (
          <p className="alert">You have no saved contacts, please add some</p>
        )}
        {contacts?.map((contact, index) => {
          return (
            <p>
              <Link to={`/contacts/${index}`}>{contact.name}</Link>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
