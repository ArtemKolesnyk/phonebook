import React from "react";
import PropTypes from "prop-types";
import { Input, Label, Form } from "../ContactsForm/ContactsForm.styled";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <Form>
      <Label>
        Find contacts by name
        <br />
        <Input
          type="text"
          value={value}
          onChange={(e) => onChangeFilter(e.target.value)}
        />
      </Label>
    </Form>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
