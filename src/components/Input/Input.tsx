import { ChangeEventHandler } from "react";
import { StyledInput } from "./styles";

interface IProps {
  placeholder: string;
  type: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: () => void;
  error?: string | undefined;
  disabled?: boolean;
}

export const Input = ({ placeholder, type, value, onChange, onBlur, error, disabled }: IProps) => {
  return (
    <StyledInput
      error={error}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
    />
  );
};
