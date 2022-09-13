import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { BsFilterRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useDebounce, useInput } from "../../hooks";
import { IGenresOption } from "../../types";
import { CustomSelect } from "../CustomSelect";
import { FormButton } from "../FormButton";
import { Input } from "../Input";
import { Portal, PortalTarget } from "../Portal";
import * as store from "../../store";
import * as styles from "./styles";

type FiltersFormValue = {
  type: IGenresOption | null;
  s: string;
  y: string;
};

export const Search = () => {
  const search = useInput("");
  const debounceValue = useDebounce(search.value, 500);
  const dispatch = store.useAppDispatch();

  useEffect(() => {
    dispatch(store.addSearchWord(debounceValue));
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
      type: null,
      s: "",
      y: "",
    },
  });

  const { isLoading } = store.useAppSelector(
    (state) => state.persistedReducer.movies
  );

  const onSubmit = ({ type, s, y }: FiltersFormValue) => {
    dispatch(store.addSearchParams({ searchWord: s, type: type && type.value, year: y }));
    reset();
    handleFilters();
  };

  return (
    <styles.SearchWrapper>
      <Input placeholder="Search" type="text" {...search} />
      <styles.FilterButton onClick={handleFilters} type="button">
        <BsFilterRight />
      </styles.FilterButton>
      {isOpen && (
        <Portal target={PortalTarget.FILTERS}>
          <styles.Container onClick={handleFilters}>
            <styles.FilterForm
              onClick={(event) => event.stopPropagation()}
              onSubmit={handleSubmit(onSubmit)}
            >
              <styles.Header>
                <styles.Title>Filters</styles.Title>
                <styles.Button onClick={handleFilters} type="button">
                  <IoMdClose />
                </styles.Button>
              </styles.Header>
              <styles.InputsContainer>
                <styles.SelectLabel>
                  <styles.LabelText>Type</styles.LabelText>
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
                </styles.SelectLabel>

                <styles.Label>
                  <styles.LabelText>Full or short movie name</styles.LabelText>
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
                  {errors.s && <styles.ErrorMessage>{errors.s.message}</styles.ErrorMessage>}
                </styles.Label>

                <styles.Label>
                  <styles.LabelText>Year</styles.LabelText>
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
                  {errors.y && <styles.ErrorMessage>{errors.y.message}</styles.ErrorMessage>}
                </styles.Label>
              </styles.InputsContainer>
              <styles.ButtonsBlock>
                <styles.CancelButton type='reset' onClick={() => reset()}>
                  Clear filter
                </styles.CancelButton>
                <FormButton text="Show results" isLoading={isLoading} />
              </styles.ButtonsBlock>
            </styles.FilterForm>
          </styles.Container>
        </Portal>
      )}
    </styles.SearchWrapper>
  );
};
