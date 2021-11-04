import React from "react";
import { Wrapper, Input, Label } from "./Filter.styled";

const Filter = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </Wrapper>
  );
};

export default Filter;
