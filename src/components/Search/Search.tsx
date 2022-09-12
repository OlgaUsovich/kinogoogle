import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { BsFilterRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useDebounce, useInput } from "../../hooks";
import {
  addSearchWord,
  cleanStore,
  getSearchMovies,
} from "../../store/features/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { IGenresOption } from "../../types";
import { CustomSelect } from "../CustomSelect";
import { FormButton } from "../FormButton";
import { Input } from "../Input";
import { Portal, PortalTarget } from "../Portal";
import {
  Button,
  ButtonsBlock,
  CancelButton,
  Container,
  ErrorMessage,
  FilterButton,
  FilterForm,
  Header,
  InputsContainer,
  Label,
  LabelText,
  SearchWrapper,
  SelectLabel,
  Title,
} from "./styles";

type FiltersFormValue = {
  type: IGenresOption;
  s: string;
  y: string;
};

export const Search = () => {
  const search = useInput("");
  const debounceValue = useDebounce(search.value, 500);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addSearchWord(debounceValue));
  }, [debounceValue, dispatch]);

  const [isOpen, toggleFilters] = useState<boolean>(false);

  const handleFilters = () => {
    toggleFilters((isOpen) => !isOpen);
  };

  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<FiltersFormValue>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      type: undefined,
      s: "",
      y: "",
    },
  });

  const { isLoading, error } = useAppSelector(
    (state) => state.persistedReducer.movies
  );

  const onSubmit = ({ type, s, y }: FiltersFormValue) => {
    dispatch(cleanStore());
    dispatch(getSearchMovies({ s, type: type.value, y }));
    reset();
    handleFilters();
  };

  return (
    <SearchWrapper>
      <Input placeholder="Search" type="text" {...search} />
      <FilterButton onClick={handleFilters} type="button">
        <BsFilterRight />
      </FilterButton>
      {isOpen && (
        <Portal target={PortalTarget.FILTERS}>
          <Container onClick={handleFilters}>
            <FilterForm
              onClick={(event) => event.stopPropagation()}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Header>
                <Title>Filters</Title>
                <Button onClick={handleFilters} type="button">
                  <IoMdClose />
                </Button>
              </Header>
              <InputsContainer>
                <SelectLabel>
                  <LabelText>Type</LabelText>
                  <Controller
                    name="type"
                    control={control}
                    render={({ field: { value, onChange } }) => {
                      return (
                        <CustomSelect
                          value={value}
                          onChange={onChange}
                          // error={errors.genre?.message}
                        />
                      );
                    }}
                  />
                </SelectLabel>

                <Label>
                  <LabelText>Full or short movie name</LabelText>
                  <Controller
                    name="s"
                    control={control}
                    rules={{ required: "Name is required by API" }}
                    render={({ field: { value, onChange } }) => {
                      return (
                        <Input
                          placeholder="Your text"
                          type="text"
                          value={value}
                          onChange={onChange}
                          error={errors.s?.message}
                        />
                      );
                    }}
                  />
                  {errors.s && <ErrorMessage>{errors.s.message}</ErrorMessage>}
                </Label>

                <Label>
                  <LabelText>Year</LabelText>
                  <Controller
                    name="y"
                    control={control}
                    rules={{
                      pattern: {
                        value: /^(19|20)\d{2}$/,
                        message:
                          "Please enter a year from 1900 to current year",
                      },
                    }}
                    render={({ field: { value, onChange } }) => {
                      return (
                        <Input
                          placeholder="Enter year"
                          type="number"
                          value={value}
                          onChange={onChange}
                          error={errors.y?.message}
                        />
                      );
                    }}
                  />
                  {errors.y && <ErrorMessage>{errors.y.message}</ErrorMessage>}
                </Label>
              </InputsContainer>
              <ButtonsBlock>
                <CancelButton onClick={() => reset()}>
                  Clear filter
                </CancelButton>
                <FormButton text="Show results" isLoading={isLoading} />
              </ButtonsBlock>
            </FilterForm>
          </Container>
        </Portal>
      )}
    </SearchWrapper>
  );
};
