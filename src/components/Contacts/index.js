import React, { useEffect, useState } from "react";

import styles from "../../styles/contacts.module.css";
import { Link } from "react-router-dom";
const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const contactsFromStorage = [
      ...JSON.parse(localStorage.getItem("contacts")),
    ];

    setContacts(contactsFromStorage);
  }, []);
  return (
    <div>
      <Link to="/add">
        <button>Add +</button>
      </Link>
      <div className={styles.contacts_wrapper}>
        {contacts.map((contact, index) => {
          const parsed = JSON.parse(contact);
          return (
            <p>
              <Link to={`/contacts/${index}`}>{parsed.name}</Link>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
