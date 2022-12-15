import styled from "styled-components";

export const Item = styled.li`
  list-style-type: none;
  color: blue;
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin: 5px;
`;

export const Button = styled.button`

  padding: 5px;
  color: yellow;
  border-radius: 4px;
  border: 1px solid #47bdfd;
  background-color: #00e1ff;
  &:hover {
    background-color: #ea1111fc;
  }
`;

export const Text = styled.p`
  color: green;
  margin-right: 70px;
`;
