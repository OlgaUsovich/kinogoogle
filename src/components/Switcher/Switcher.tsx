import { ChangeEventHandler } from "react";
import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from "./styles";

interface IProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: boolean;
}

export const Switcher = ({ value, onChange }: IProps) => {
  return (
    <CheckBoxWrapper>
      <CheckBox checked={value} onChange={onChange} id="checkbox" type="checkbox" />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
};
