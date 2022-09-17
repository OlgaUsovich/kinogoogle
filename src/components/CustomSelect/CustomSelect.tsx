import { IGenresOption } from "types";
import Select from "react-select";
import { customStyles } from "./styles";

interface IProps {
  value: IGenresOption | null;
  onChange: (option: IGenresOption | null) => void;
}

export const CustomSelect = ({ value, onChange }: IProps) => {
  const options: IGenresOption[] = [
    { value: "movie", label: "Movie" },
    { value: "series", label: "Series" },
    { value: "episode", label: "Episode" },
  ];

  return (
    <Select
      onChange={onChange}
      value={value}
      options={options}
      styles={customStyles}
      placeholder={"Select genre"}
      isSearchable={false}
      isMulti={false}
    />
  );
};
