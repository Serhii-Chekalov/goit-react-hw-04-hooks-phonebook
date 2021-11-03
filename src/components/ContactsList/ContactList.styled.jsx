import styled from "@emotion/styled";

export const List = styled.ul`
  margin-left: 70px;
`;

export const ListItem = styled.li`
  margin-top: 10px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 3px 6px;
  margin-left: 10px;
  font-size: 12px;
  background-color: #fff;
  border: 1px solid grey;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: blue;
    border-color: blue;
  }
`;
