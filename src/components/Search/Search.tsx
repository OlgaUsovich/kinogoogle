import { useEffect } from "react";
import { BsFilterRight } from "react-icons/bs";
import { useDebounce, useInput } from "../../hooks";
import { addSearchWord } from "../../store/features/moviesSlice";
import { useAppDispatch } from "../../store/hooks";
import { Input } from "../Input";
import { FilterButton, SearchWrapper } from "./styles";

export const Search = () => {
  const search = useInput("");
  const debounceValue = useDebounce(search.value, 500);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addSearchWord(debounceValue))
  }, [debounceValue, dispatch]);
  
  return (
    <SearchWrapper>
      <Input placeholder="Search" type="text" {...search} />
      <FilterButton type="button"><BsFilterRight /></FilterButton>
    </SearchWrapper>
  );
};
