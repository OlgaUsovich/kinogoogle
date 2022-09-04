import { ChangeEventHandler, useState } from "react";
import { ISearchOptions } from "../types";

export const useInput = (initialValue: string): ISearchOptions => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setValue(target.value);
  };

  return { value, onChange };
};
