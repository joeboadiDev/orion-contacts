import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Contact from "../components/Contacts/Contact";
import Layout from "../components/Layout";

import { FaEdit, FaTrash } from "react-icons/fa";
import GoBack from "../components/Layout/GoBack";
import { Link } from "react-router-dom";
const Single = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete")) {
      const contacts = JSON.parse(localStorage.getItem("contacts"));
      const newContacts = contacts.filter(
        (item, index) => index !== Number(id) && item
      );

      localStorage.setItem("contacts", JSON.stringify(newContacts));
      alert("Contact deleted");
      setTimeout(() => {
        navigate(-1);
      }, 500);
    }
  };
  const [contact, setContact] = useState("");
  useEffect(() => {
    const contactsFromStorage = JSON.parse(localStorage.getItem("contacts"));
    setContact(contactsFromStorage[id]);
  }, [id]);
  return (
    <Layout>
      <GoBack />
      <Contact contact={contact} />
      <div className="flex g-2">
        <Link to={`/edit/${id}`}>
          <button>
            Edit <FaEdit />
          </button>
        </Link>

        <button onClick={handleDelete}>
          Delete <FaTrash />
        </button>
      </div>
    </Layout>
  );
};

export default Single;
