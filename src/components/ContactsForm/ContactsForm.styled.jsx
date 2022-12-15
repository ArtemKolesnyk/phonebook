import styled from "styled-components";

export const TitlePhone = styled.h1`
  display: flax;
  justify-content: center;
  color: #26676e;
  font-size: 30px;
`;

export const TitleContact = styled.h2`
  display: flax;
  justify-content: center;
  color: #26676e;
  font-size: 20px;
`;

export const Form = styled.form`
  margin-bottom: 20px
`;

export const Label = styled.label`
  display: flax;
  justify-content: center;
  color: green;
`;

export const Button = styled.button`
  ;
  margin-left: 460px;
  margin-top: 10px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #47bdfd;
  background-color: #00e1ff;
  &:hover {
    background-color: #8aaa52fc;
  }
`;

export const Input = styled.input`
  border: solid  ${'teal'} 2px;
  border-radius: 4px;
  &:hover,
  &:focus {
    border: solid ${'teal'} 2px;;
    box-shadow: 20px 20px 50px ${'teal'};
  }
`;
