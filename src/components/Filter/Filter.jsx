import { Component } from "react";
import { Wrapper, Input, Label } from "./Filter.styled";

class Filter extends Component {
  getFilteredName = (e) => {
    const { onChange } = this.props;

    return onChange(e.currentTarget.value);
  };

  render() {
    const { value } = this.props;
    return (
      <Wrapper>
        <Label htmlFor="filter">Find contacts by name</Label>
        <Input
          type="text"
          name="filter"
          value={value}
          onChange={this.getFilteredName}
        />
      </Wrapper>
    );
  }
}

export default Filter;
