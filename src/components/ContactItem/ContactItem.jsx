import React from "react";
import PropTypes from "prop-types";
import { Item, Button, Text } from "./ContactItem.styled";
const ContactItem = ({ contact: { id, name, number }, onRemoveContact }) => {
  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <Button onClick={() => onRemoveContact(id)} type="button">
        Delate
      </Button>
    </Item>
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
