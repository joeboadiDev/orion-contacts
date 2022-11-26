import React from "react";
import { FaEnvelope, FaMapPin, FaPhone, FaUser } from "react-icons/fa";
const Contact = ({ contact }) => {
  return (
    <div>
      <p>
        <FaUser /> {contact.name}
      </p>
      <p>
        <FaPhone /> {contact.phone}
      </p>
      <p>
        <FaEnvelope /> {contact.email}
      </p>
      <p>
        <FaMapPin /> {contact.location}
      </p>
    </div>
  );
};

export default Contact;
