import { BsFilterRight } from "react-icons/bs";
import { Input } from "../Input";
import { FilterButton, SearchWrapper } from "./styles";

export const Search = () => {
  return (
    <SearchWrapper>
      <Input placeholder="Search" type="text" />
      <FilterButton type="button"><BsFilterRight /></FilterButton>
    </SearchWrapper>
  );
};
