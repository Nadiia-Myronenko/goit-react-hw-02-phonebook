import React from "react";
import { SearchInput } from "./SearchField.styled";

const SearchField = ({ value, onChange }) => {
  return <SearchInput type="text" value={value} onChange={onChange} />;
};
export default SearchField;
