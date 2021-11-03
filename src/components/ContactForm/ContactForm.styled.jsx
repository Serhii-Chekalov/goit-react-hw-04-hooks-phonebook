import styled from "@emotion/styled";

export const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  margin-left: 70px;
  padding: 10px 200px 10px 10px;
  border: 2px solid black;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 3px;
  margin-top: 5px;
  margin-bottom: 15px;
  &:hover {
    border-color: blue;
  }
`;

export const Button = styled.button`
  width: fit-content;
  padding: 4px;
  margin-top: 8px;
  font-size: 14px;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: #fff;
  &:hover {
    cursor: pointer;
    background-color: blue;
    border-color: blue;
  }
`;
