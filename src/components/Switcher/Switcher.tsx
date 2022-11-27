import { ChangeEventHandler } from "react";
import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from "./styles";

interface IProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: boolean;
  onClick: () => void;
}

export const Switcher = ({ value, onChange, onClick }: IProps) => {
  return (
    <CheckBoxWrapper>
      <CheckBox
        checked={value}
        onChange={onChange}
        onClick={onClick}
        id="checkbox"
        type="checkbox"
      />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
};
