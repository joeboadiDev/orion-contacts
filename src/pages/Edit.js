import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Layout from "../components/Layout";
import GoBack from "../components/Layout/GoBack";
import styles from "../styles/form.module.css";
const Edit = () => {
  const { id } = useParams();
  const [person, setPerson] = useState({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const contactsFromStorage = JSON.parse(localStorage.getItem("contacts"));
    setPerson(JSON.parse(contactsFromStorage[id]));
    setName(person.name);
    setEmail(person.email);
    setLocation(person.location);
    setPhone(person.phone);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, person.phone]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let contactsArr = JSON.parse(localStorage.getItem("contacts")) || [];

    const contact = JSON.stringify({
      name,
      phone,
      location,
      email,
    });
    // contactsArr = contactsArr.map((item,index)=> {if(item===JSON.parse(contactsArr[id])){
    //   return contact;
    // }})
    localStorage.setItem("contacts", JSON.stringify(contactsArr));
  };
  return (
    <Layout>
      <GoBack />
      <h1>Edit a contact</h1>
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
            defaultValue={phone}
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

        <button type="submit">Edit</button>
      </form>
    </Layout>
  );
};

export default Edit;
