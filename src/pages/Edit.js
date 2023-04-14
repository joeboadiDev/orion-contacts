import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Layout from "../components/Layout";
import GoBack from "../components/Layout/GoBack";
import styles from "../styles/form.module.css";
const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [person, setPerson] = useState({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const contactsFromStorage = JSON.parse(localStorage.getItem("contacts"));
    setPerson(contactsFromStorage[id]);
  }, [id]);
  useEffect(() => {
    setEmail(person.email);
    setPhone(person.phone);
    setLocation(person.location);
    setName(person.name);
  }, [id, person]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let contactsArr = JSON.parse(localStorage.getItem("contacts")) || [];

    console.log("old", contactsArr);

    const contact = {
      name,
      phone,
      location,
      email,
    };

    let edited = contactsArr.map((item, index) => {
      if (index === Number(id)) {
        return contact;
      } else {
        return item;
      }
    });

    console.log("new", edited);

    localStorage.setItem("contacts", JSON.stringify(edited));
    if (window.confirm("Contact Updated")) {
      navigate(-1);
    }
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
            defaultValue={person.name}
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            className={styles.input}
            required
            placeholder="Enter Phone"
            type="number"
            defaultValue={person.phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <input
            className={styles.input}
            required
            defaultValue={person.location}
            placeholder="Enter Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <input
            className={styles.input}
            required
            type="email"
            defaultValue={person.email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <!--edit btn changed to update btn-->
        <button type="submit">Update</button>
      </form>
    </Layout>
  );
};

export default Edit;
