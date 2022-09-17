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
import { getMoviesSelector } from "../../store";
import { FormInput } from "components";
import { useLocation } from "react-router-dom";
import { ROUTE } from "routers";

export type FiltersFormValue = {
  type: IGenresOption | null;
  s: string;
  y: string;
};

export const Search = () => {
  const search = useInput("");
  const debounceValue = useDebounce(search.value, 500);
  const dispatch = store.useAppDispatch();
  const { pathname } = useLocation();

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
    getValues
  } = useForm<FiltersFormValue>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      type: null,
      s: "",
      y: "",
    },
  });

  const { isLoading } = store.useAppSelector(getMoviesSelector);
  const showMark = getValues("type") || getValues("s") || getValues("y");

  const onSubmit = ({ type, s, y }: FiltersFormValue) => {
    dispatch(store.cleanStore());
    dispatch(store.addSearchParams({ searchWord: s, type: type && type.value, year: y }));
    handleFilters();
  };

  return (
    <styles.SearchWrapper>
      <Input placeholder="Search" type="text" {...search} />
      <styles.FilterButton onClick={handleFilters} type="button">
        <BsFilterRight />
        {showMark && <styles.FilterMark></styles.FilterMark>}
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
                      return <CustomSelect value={value} onChange={onChange} />;
                    }}
                  />
                </styles.SelectLabel>
                <FormInput
                  name="s"
                  control={control}
                  placeholder="Your text"
                  label="Full or short movie name"
                  type="text"
                  validationType="searchName"
                  errorMessage={errors.s?.message}
                />
                <FormInput
                  name="y"
                  control={control}
                  placeholder={
                    pathname === `/${ROUTE.TRENDS}`
                      ? "In Trends there're only current year movies"
                      : "Enter year"
                  }
                  label="Year"
                  type="number"
                  disabled={pathname === `/${ROUTE.TRENDS}`}
                  validationType="year"
                  errorMessage={errors.y?.message}
                />
              </styles.InputsContainer>
              <styles.ButtonsBlock>
                <styles.CancelButton
                  type="reset"
                  onClick={() => {
                    reset();
                    dispatch(store.clearSearchParams());
                  }}
                >
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
