import React from "react";

import PropTypes from "prop-types";

const ContactItem = ({ contact: { id, name, number }, onRemoveContact }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => onRemoveContact(id)} type="button">
        Удалить
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactItem;
