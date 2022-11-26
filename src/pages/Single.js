import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Contact from "../components/Contacts/Contact";
import Layout from "../components/Layout";

import { FaEdit, FaTrash } from "react-icons/fa";
import GoBack from "../components/Layout/GoBack";
import { Link } from "react-router-dom";
const Single = () => {
  const { id } = useParams();

  const handleDelete = () => {
    window.confirm("Are you sure you want to delete");
  };
  const [contact, setContact] = useState("");
  useEffect(() => {
    const contactsFromStorage = JSON.parse(localStorage.getItem("contacts"));
    setContact(JSON.parse(contactsFromStorage[id]));
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
