import React, { useState } from "react";
import { useNavigate, useNavigation } from "react-router";
import Layout from "../components/Layout";
import GoBack from "../components/Layout/GoBack";
import styles from "../styles/form.module.css";
const Add = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactsArr = JSON.parse(localStorage.getItem("contacts")) || [];

    const contact = JSON.stringify({
      name,
      phone,
      location,
      email,
    });
    contactsArr.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contactsArr));
  };
  return (
    <Layout>
      <GoBack />
      <h1>Add a contact</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <input
            className={styles.input}
            required
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            className={styles.input}
            required
            placeholder="Enter Phone"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <input
            className={styles.input}
            required
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <input
            className={styles.input}
            required
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit">Add</button>
      </form>
    </Layout>
  );
};

export default Add;
