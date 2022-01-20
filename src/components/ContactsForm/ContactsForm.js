import React, { Component } from "react";
import { Label, Button } from "./ContactsForm.styled";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;

    this.props.onSubmit(name, number);
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <br />
          <input
            name="name"
            type="text"
            value={name}
            onChange={this.changeHandler}
          />
        </Label>
        <br />
        <Label>
          Number
          <br />
          <input
            name="number"
            type="text"
            value={number}
            onChange={this.changeHandler}
          />
        </Label>
        <br />
        <Button type="submit">Add contact</Button>
      </form>
    );
  }
}
