import { StyledInput } from "./styles";

interface IProps {
  placeholder: string;
  type: string;
  value?: string;
  onChange?: () => void;
  onBlur?: () => void;
}

export const Input = ({ placeholder, type, value, onChange, onBlur }: IProps) => {
  return (
    <StyledInput
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
