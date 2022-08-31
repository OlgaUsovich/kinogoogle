import { FieldError } from "react-hook-form";
import { StyledInput } from "./styles";

interface IProps {
  placeholder: string;
  type: string;
  value?: string;
  onChange?: () => void;
  onBlur?: () => void;
  error?: string | undefined;
}

export const Input = ({ placeholder, type, value, onChange, onBlur, error }: IProps) => {
  return (
    <StyledInput
      error={error}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
