import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-left: 70px;
`;

export const Input = styled.input`
  padding: 3px;
  margin-top: 5px;
  &:hover {
    border-color: blue;
  }
`;

export const Label = styled.label`
  font-weight: 500;
`;
