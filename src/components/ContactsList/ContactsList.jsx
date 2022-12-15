import React from "react";
import PropTypes from "prop-types";
import ContactItem from "../ContactItem";


const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul contacts={contacts}>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onRemoveContact={onRemoveContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;
